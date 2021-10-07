import { StarsCounter } from '.';

export default {
  title: 'StarsCounter',
  component: StarsCounter,
  args: {
    starsCount: 0,
  },
  argTypes: {
    starsCount: { type: 'number' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = (args) => <StarsCounter {...args} />;

export const WithMoreThanOneStar = Default.bind({});

WithMoreThanOneStar.args = {
  starsCount: 5,
};
