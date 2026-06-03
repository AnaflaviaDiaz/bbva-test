import { html, TemplateResult } from 'lit';

import '../src/components/card-account/index.js';
import { CardAccountModel } from '../src/components/models/index.js';

export default {
  title: 'CardAccount',
  component: 'bbva-card-account',
  argTypes: {
    date: { control: 'date' },
    title: { control: 'text' },
    amount: { control: 'object' },
    marketGain: { control: 'object' },
    badgeStatus: { control: 'object' },
    accountCategory: { control: 'object' },
    cardCategory: { control: 'object' },
    hasActionButtons: { control: 'boolean' },
    primaryButtonText: { control: 'text' },
    secondaryButtonText: { control: 'text' },
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
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
  amount,
  title,
  date,
  imageTemplate,
  marketGain,
  badgeStatus,
  accountCategory,
  cardCategory,
  hasActionButtons,
  primaryButtonText,
  secondaryButtonText,
  descriptionTemplate,
}: CardAccountModel) => html`
  <bbva-card-account
    .date=${date}
    .title=${title}
    .amount=${amount}
    .accountCategory=${accountCategory}
    .cardCategory=${cardCategory}
    .badgeStatus=${badgeStatus}
    .imageTemplate=${imageTemplate}
    .markerGain=${marketGain}
    ?has-action-buttons=${hasActionButtons}
    .primaryButtonText=${primaryButtonText}
    .secondaryButtonText=${secondaryButtonText}
  >
    ${descriptionTemplate}
  </bbva-card-account>
`;

const cardAccountMock: CardAccountModel = {
  date: '2026-06-05',
  title: 'Titulo',
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
  hasActionButtons: true,
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
WithDescriptionAndImage.args = { ...cardAccountMock, descriptionTemplate, imageTemplate };
