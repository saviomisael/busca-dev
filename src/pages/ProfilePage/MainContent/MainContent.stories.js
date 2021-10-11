import { MainContent } from '.';

export default {
  title: 'pages/ProfilePage/MainContent',
  component: MainContent,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = (args) => <MainContent {...args} />;
