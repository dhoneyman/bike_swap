import logo from './logo.svg';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


const listings = () => {
  fetch('http://localhost:3001/')
  .then(responce => responce.json())
  .then(data => console.log(data));
}

listings();

function App() {
  return (
    <Router>
        <div>
          {/* <StoreProvider> */}
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              {/* <Route exact path="/profile" component={Profile} /> */}
              {/* <Route exact path="/orderHistory" component={OrderHistory} /> */}
              {/* <Route exact path="/success" component={Success} /> */}
              {/* <Route exact path="/products/:id" component={Detail} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
            {/* <Route exact path="/products/:productId">
              <SingleProduct />
            </Route> */}
          {/* </StoreProvider> */}
        </div>
      </Router>
  );
}

export default App;
