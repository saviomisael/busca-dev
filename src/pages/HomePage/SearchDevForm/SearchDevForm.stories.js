import { SearchDevForm } from '.';

export default {
  title: 'pages/HomePage/SearchDevForm',
  component: SearchDevForm,
  args: {},
  argTypes: {
    onSubmit: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <SearchDevForm {...args} />;

export const WhenButtonHover = Default.bind({});

WhenButtonHover.parameters = {
  pseudo: { hover: true },
};

export const WhenButtonClicked = Default.bind({});

WhenButtonClicked.parameters = {
  pseudo: { active: true },
};
