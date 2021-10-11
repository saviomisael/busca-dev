import { Sidebar } from '.';
import { theme } from '../../../styles/theme';

export default {
  title: 'pages/ProfilePage/Sidebar',
  component: Sidebar,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: theme.colors.first,
        },
      ],
    },
  },
};

export const Default = (args) => <Sidebar {...args} />;
