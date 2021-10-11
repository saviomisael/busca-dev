import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProfilePage } from '../pages/ProfilePage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:username" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};
