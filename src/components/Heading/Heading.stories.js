import { Heading } from '.';

export default {
  title: 'components/Heading',
  component: Heading,
  args: {
    children: 'Some text',
    gradient: null,
    as: 'h1',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <Heading {...args} />;

export const WithBlueGradient = Default.bind({});

WithBlueGradient.args = {
  gradient: 'blue',
};

export const WithGreenGradient = Default.bind({});

WithGreenGradient.args = {
  gradient: 'green',
};

export const AsHeading5 = Default.bind({});

AsHeading5.args = {
  as: 'h5',
};
