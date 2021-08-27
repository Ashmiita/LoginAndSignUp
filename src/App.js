import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter, Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';

import User from './pages/user';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/Home';

function App() {
    const getToken = localStorage.getItem('token');
    console.log('token', getToken);
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    {getToken ? (
                        <>
                            <Route path='/' component={User} exact />
                            <Route path='/signup' component={Signup} />
                            <Route path='/home' component={Home} />
                        </>
                    ) : (
                        <Login />
                    )}

                    <Route path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
