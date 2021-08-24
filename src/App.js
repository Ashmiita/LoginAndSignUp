import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter, Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';

import User from './pages/user';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" component={User} exact />

                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
