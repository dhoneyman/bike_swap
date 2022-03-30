import logo from './logo.svg';
import {createContext, useState, useMemo } from 'react'; 
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {UserContext} from './UserContext';
import './App.css';




function App() {

  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
        <div>
          {/* <StoreProvider> */}
            <Nav />
            <Switch>
          <UserContext.Provider value={value}>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
            </UserContext.Provider>
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
