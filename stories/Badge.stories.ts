import { html, TemplateResult } from 'lit';

import '../src/components/badge/index.js';
import { Variant } from '../src/components/models/variant.js';

export default {
  title: 'Badge',
  component: 'bbva-badge',
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'primary-light'],
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
  text: string;
  variant?: Variant;
}

const Template: Story<ArgTypes> = ({
  text = 'Hello world',
  variant = 'primary',
}: ArgTypes) => html`
  <bbva-badge
    .text=${text}
    .variant=${variant}
  ></bbva-badge>
`;

export const Default = Template.bind({});
Default.args = {
  text: 'Nuevo',
  variant: 'primary',
};
