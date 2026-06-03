import { html, TemplateResult } from 'lit';

import '../src/components/card-account/index.js';
import { CardAccountModel } from '../src/models/index.js';

export default {
  title: 'CardAccount',
  component: 'bbva-card-account',
  argTypes: {
    date: { control: 'date' },
    titleCard: { control: 'text' },
    amount: { control: 'object' },
    marketGain: { control: 'object' },
    badgeStatus: { control: 'object' },
    accountCategory: { control: 'object' },
    cardCategory: { control: 'object' },
    primaryButtonText: { control: 'text' },
    secondaryButtonText: { control: 'text' },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'role-img-alt', enabled: true },
          { id: 'aria-valid-attr', enabled: true },
          { id: 'aria-valid-attr-value', enabled: true },
          { id: 'aria-allowed-attr', enabled: true },
          { id: 'aria-roles', enabled: true },
          { id: 'region', enabled: true },
        ],
      },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<CardAccountModel> = ({
  id,
  amount,
  titleCard,
  date,
  imageTemplate,
  marketGain,
  badgeStatus,
  accountCategory,
  cardCategory,
  primaryButtonText,
  secondaryButtonText,
  descriptionTemplate,
}: CardAccountModel) => html`
  <bbva-card-account
    .idCard=${id}
    .date=${date}
    .titleCard=${titleCard}
    .amount=${amount}
    .accountCategory=${accountCategory}
    .cardCategory=${cardCategory}
    .badgeStatus=${badgeStatus}
    .imageTemplate=${imageTemplate}
    .markerGain=${marketGain}
    .primaryButtonText=${primaryButtonText}
    .secondaryButtonText=${secondaryButtonText}
  >
    ${descriptionTemplate}
  </bbva-card-account>
`;

const cardAccountMock: CardAccountModel = {
  id: 'card-account',
  date: '2026-06-05',
  titleCard: 'Titulo',
  amount: {
    amount: 9_999.99,
    heading: 'xl',
    currency: 'EUR',
    locale: 'de-DE',
  },
  marketGain: {
    direction: 'up',
  },
  badgeStatus: { text: 'Status', variant: 'secondary' },
  accountCategory: { categoryName: '•1234', icon: { name: 'account' } },
  cardCategory: { categoryName: 'Category', icon: { name: 'car' } },
  primaryButtonText: 'Primary',
  handlePrimaryButton: () => console.log('Primary button clicked'),
  secondaryButtonText: 'Secondary',
  handleSecondaryButton: () => console.log('Secondary button clicked'),
};

export const Default = Template.bind({});
Default.args = { ...cardAccountMock };

const imageTemplate: TemplateResult = html`<img
  src="https://www.bbva.es/content/dam/public-web/bbvaes/images/personas/productos/cuentas/cuenta-online/promo-1200/1080x720-cuenta-online-saldos.im1774256762253im.jpg?imwidth=768"
  alt="BBVA Logo"
  width="100%"
/>`;
export const WithImage = Template.bind({});
WithImage.args = { ...cardAccountMock, imageTemplate };

const descriptionTemplate: TemplateResult | undefined = html`
  <p>Description</p>
  <ul>
    <li>Hola</li>
    <li>Hola</li>
    <li>
      Hola que tal Hola que tal Hola que talHola que tal
      <strong> Hola que talHola que </strong>
      tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola
      que tal Hola que tal
    </li>
    <li>
      Hola que tal Hola que tal Hola que talHola que tal
      <strong> Hola que talHola que </strong>
      tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola
      que tal Hola que tal
    </li>
    <li>
      Hola que tal Hola que tal Hola que talHola que tal
      <strong> Hola que talHola que </strong>
      tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola
      que tal Hola que tal
    </li>
  </ul>
`;
export const WithDescription = Template.bind({});
WithDescription.args = { ...cardAccountMock, descriptionTemplate };

export const WithDescriptionAndImage = Template.bind({});
WithDescriptionAndImage.args = {
  ...cardAccountMock,
  descriptionTemplate,
  imageTemplate,
};
