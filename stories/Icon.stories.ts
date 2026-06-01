import { html, TemplateResult } from 'lit';

import '../src/components/icon/index.js';
import { VariantSize } from '../src/components/models/variant.js';
import { IconName } from '../src/components/icon/list.js';

export default {
  title: 'Icon',
  component: 'bbva-icon',
  argTypes: {
    color: { control: 'color' },
    altText: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'] as VariantSize[],
    },
    name: {
      control: { type: 'select' },
      options: ['car', 'card', 'paper'] as IconName[],
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
  color: string;
  altText: string;
  size: VariantSize;
  name: IconName;
}

const Template: Story<ArgTypes> = ({
  color,
  altText,
  size,
  name,
}: ArgTypes) => html`
  <bbva-icon
    .color=${color}
    .alt-text=${altText}
    .size=${size}
    .name=${name}
  ></bbva-icon>
`;

export const Default = Template.bind({});
Default.args = {
  color : '#000',
  altText: 'texto alternativo',
  size: 'md',
  name: 'card'
};
