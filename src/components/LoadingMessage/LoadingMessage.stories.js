import { LoadingMessage } from '.';

export default {
  title: 'components/LoadingMessage',
  component: LoadingMessage,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <LoadingMessage {...args} />;
