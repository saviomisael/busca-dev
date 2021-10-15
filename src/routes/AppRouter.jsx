import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile/:username" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};
