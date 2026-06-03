import { html, TemplateResult } from 'lit';

import '../src/components/category/index.js';
import { CategoryModel, IconModel } from '../src/models/index.js';

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

const Template: Story<CategoryModel> = ({
  categoryName = 'Category',
  icon,
}: CategoryModel) => html`
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
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  categoryName: 'Category',
  icon: iconCategory,
};
