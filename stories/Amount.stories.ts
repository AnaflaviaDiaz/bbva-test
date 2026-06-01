import { html, TemplateResult } from 'lit';

import '../src/components/amount/index.js';
import { VariantHeading } from '../src/components/models/variant.js';

export default {
  title: 'Amount',
  component: 'bbva-amount',
  argTypes: {
    amount: { control: 'text' },
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
  amount: string;
  heading?: VariantHeading;
}

const Template: Story<ArgTypes> = ({
  amount = '1.200$',
  heading = 'xl',
}: ArgTypes) => html`
  <bbva-amount .amount=${amount} .heading=${heading}></bbva-amount>
`;

export const Default = Template.bind({});
Default.args = {
  heading: 'xl',
  amount: '1.200$',
};
