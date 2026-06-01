import { html, TemplateResult } from 'lit';

import '../src/components/amount/index.js';
import { VariantHeading } from '../src/components/models/variant.model.js';

export default {
  title: 'Amount',
  component: 'bbva-amount',
  argTypes: {
    amount: { control: 'number' },
    currency: { control: 'select', options: ['GBP', 'USD', 'INR', 'EUR'] },
    locale: {
      control: 'select',
      options: ['en-GB', 'en-US', 'en-IN', 'en-ES'],
    },
    heading: {
      control: { type: 'select' },
      options: ['xl', '2xl', '3xl', '4xl', '5xl'] as VariantHeading[],
    },
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

interface ArgTypes {
  amount: number;
  heading?: VariantHeading;
  currency: string;
  locale?: string;
}

const Template: Story<ArgTypes> = ({
  amount = 1_200,
  currency,
  locale,
  heading = 'xl',
}: ArgTypes) => html`
  <bbva-amount
    .locale=${locale}
    .currency=${currency}
    .amount=${amount}
    .heading=${heading}
  ></bbva-amount>
`;

export const Default = Template.bind({});
Default.args = {
  heading: 'xl',
  amount: 1_200,
  currency: 'EUR',
  locale: 'en-ES',
};
