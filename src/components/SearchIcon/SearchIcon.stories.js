import { SearchIcon } from '.';

export default {
  title: 'components/SearchIcon',
  component: SearchIcon,
  args: {},
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = (args) => <SearchIcon {...args} />;
