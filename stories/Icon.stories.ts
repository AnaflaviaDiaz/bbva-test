import { html, TemplateResult } from 'lit';

import '../src/components/icon/index.js';
import { VariantSize } from '../src/components/models/variant.model.js';
import { IconName } from '../src/components/icon/list.js';
import { IconModel } from '../src/components/models/icon.model.js';

export default {
  title: 'Icon',
  component: 'bbva-icon',
  argTypes: {
    color: { control: 'color' },
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
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'image-alt', enabled: true },
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

const Template: Story<IconModel> = ({
  color = '#000',
  size = 'md',
  name,
}: IconModel) => html`
  <bbva-icon .color=${color} .size=${size} .name=${name}></bbva-icon>
`;

export const Default = Template.bind({});
Default.args = {
  color: '#000',
  size: 'md',
  name: 'card',
};
