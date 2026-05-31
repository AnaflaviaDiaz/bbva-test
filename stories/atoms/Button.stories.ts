import { html, TemplateResult } from 'lit';

export default {
  title: 'Atoms/Button',
  component: 'bbva-button',
  argTypes: {
    title: { control: 'text' },
    type: { control: 'radio', options: ['submit', 'button'] },
    disabled: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'primary-light'],
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'aria-*', enabled: true },
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

interface ArgTypes {
  title: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'primary-light' | 'secondary';
}

const Template: Story<ArgTypes> = ({
  title = 'Hello world',
  variant = 'primary',
  disabled,
  type = 'button',
}: ArgTypes) => html`
  <bbva-button
    .title=${title}
    .variant=${variant}
    ?disabled=${disabled}
    .type=${type}
  ></bbva-button>
`;

export const Default = Template.bind({});
Default.args = {
  title: 'Test button',
  type: 'button',
  variant: 'primary',
  disabled: false,
};
