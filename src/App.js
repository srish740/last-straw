import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Investor from './components/investor/investor';
import User from './components/user/user';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/user' component={User} />
          <Route exact path='/' component={Investor} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
    </div>
  );
}
export default App;
