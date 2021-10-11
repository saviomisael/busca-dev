import { Button } from '.';

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Some text',
    size: 'large',
  },
  argTypes: {
    children: { type: 'string' },
    onClick: { table: { disable: true } },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = (args) => <Button {...args} />;

export const Hover = Default.bind({});

Hover.parameters = {
  pseudo: { hover: true },
};

export const WhenClicked = Default.bind({});

WhenClicked.parameters = {
  pseudo: { active: true },
};
