import Auth from './views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import BulletBoard from './views/BulletBoard/BulletBoard';
import { UserProvider } from './context/context';
import Details from './views/Details/Details';
import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';
import Edit from './components/Edit/Edit';

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

            <Route exact path="/posts/:id/edit">
              <Edit />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
