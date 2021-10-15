import { MemoryRouter, Switch, Route } from 'react-router-dom';
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

Default.decorators = [
  (Story) => (
    <MemoryRouter initialEntries={[`/profile/octocat`]}>
      <Switch>
        <Route path="/profile/:username" render={() => <Story />} />
      </Switch>
    </MemoryRouter>
  ),
];
