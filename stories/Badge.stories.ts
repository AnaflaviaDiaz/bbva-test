import { html, TemplateResult } from 'lit';

import '../src/components/badge/index.js';
import { BadgeModel, VariantColor } from '../src/models/index.js';

export default {
  title: 'Badge',
  component: 'bbva-badge',
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'primary-light'] as VariantColor[],
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

const Template: Story<BadgeModel> = ({
  text = 'Hello world',
  variant = 'primary',
}: BadgeModel) => html`
  <bbva-badge .text=${text} .variant=${variant}></bbva-badge>
`;

export const Default = Template.bind({});
Default.args = {
  text: 'Nuevo',
  variant: 'primary',
};
