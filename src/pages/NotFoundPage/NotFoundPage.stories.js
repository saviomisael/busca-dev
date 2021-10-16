import { NotFoundPage } from '.';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = (args) => <NotFoundPage {...args} />;
