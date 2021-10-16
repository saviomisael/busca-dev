import { Dots } from '.';

export default {
  title: 'components/LoadingMessage/Dots',
  component: Dots,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <Dots {...args} />;
