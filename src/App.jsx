import Auth from './views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/privateRoute';

export default function App() {
  return (
    <dive className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </dive>
  );
}
