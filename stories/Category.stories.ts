import { html, TemplateResult } from 'lit';

import '../src/components/category/index.js';
import { IconModel } from '../src/components/models/icon.model.js';

export default {
  title: 'Category',
  component: 'bbva-category',
  argTypes: {
    categoryName: { control: 'text' },
    icon: {
      control: { type: 'object' },
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
  categoryName: string;
  icon?: IconModel;
}

const Template: Story<ArgTypes> = ({
  categoryName = 'Category',
  icon,
}: ArgTypes) => html`
  <bbva-category category-name=${categoryName} .icon=${icon}></bbva-category>
`;

export const Default = Template.bind({});
Default.args = {
  categoryName: 'Category',
};

const iconCategory: IconModel = {
  name: 'car',
  color: '#6f6f',
  size: 'md',
  altText: 'text-alternativo'
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  categoryName: 'Category',
  icon: iconCategory,
};
