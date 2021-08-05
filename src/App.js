import './App.css';
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './Components/Orders/Orders';
import Checkout from './Components/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route exact path="/">
            <BurgerBuilder></BurgerBuilder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
