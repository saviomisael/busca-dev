import { HomePage } from '.';

export default {
  title: 'pages/HomePage',
  component: HomePage,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = (args) => <HomePage {...args} />;
