import { ProfilePage } from '.';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = (args) => <ProfilePage {...args} />;
