import { MemoryRouter, Route, Switch } from 'react-router';
import { HomePage } from '.';
import { ProfilePage } from '../ProfilePage';

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

Default.decorators = [
  (Story) => (
    <MemoryRouter>
      <Switch>
        <Route path="/profile/:username" render={() => <ProfilePage />} />
        <Route path="/" exact render={() => <Story />} />
      </Switch>
    </MemoryRouter>
  ),
];
