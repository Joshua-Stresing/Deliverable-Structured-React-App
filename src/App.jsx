import Auth from './views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/privateRoute';
import BulletBoard from './views/BulletBoard/BulletBoard';
import { UserProvider } from './context/context';
import Details from './views/Details/Details';

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login">
              <Auth />
            </Route>

            <Route exact path="/">
              <BulletBoard />
            </Route>

            <Route exact path="/posts/:id">
              <Details />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
