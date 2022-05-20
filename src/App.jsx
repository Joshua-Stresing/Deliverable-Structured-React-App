import Auth from './views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/privateRoute';
import BulletBoard from './views/BulletBoard/BulletBoard';
import { UserProvider } from './context/context';
import Details from './views/Details/Details';
import Header from './components/Header';
import AddPost from './components/AddPost/AddPost';

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/login">
              <Auth />
            </Route>

            <Route exact path="/">
              <BulletBoard />
            </Route>

            <PrivateRoute exact path="/add">
              <AddPost />
            </PrivateRoute>

            <PrivateRoute exact path="/posts/:id">
              <Details />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
