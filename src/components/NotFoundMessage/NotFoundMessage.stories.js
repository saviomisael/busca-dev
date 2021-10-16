import { NotFoundMessage } from '.';
import { theme } from '../../styles/theme';

export default {
  title: 'components/NotFoundMessage',
  component: NotFoundMessage,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: theme.colors.second,
        },
      ],
    },
  },
};

export const Default = (args) => <NotFoundMessage {...args} />;
