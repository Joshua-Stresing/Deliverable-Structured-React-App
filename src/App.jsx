import Auth from './views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/privateRoute';
import BulletBoard from './views/BulletBoard/BulletBoard';
import { UserProvider } from './context/context';

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/">
              <BulletBoard />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
