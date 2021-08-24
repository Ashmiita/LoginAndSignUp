import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const history = useHistory();

    return (
        <>
            <div className="flex pd">
                <div
                    onClick={() => {
                        history.push('/');
                    }}
                    className={`nav-item ${
                        window.location.pathname == '/' ? 'active' : ''
                    }`}
                >
                    Users
                </div>
                <div
                    onClick={() => {
                        history.push('/signup');
                    }}
                    className={`nav-item ${
                        window.location.pathname == '/signup' ? 'active' : ''
                    }`}
                >
                    Signup
                </div>
                <div
                    onClick={() => {
                        history.push('/login');
                    }}
                    className={`nav-item ${
                        window.location.pathname == '/login' ? 'active' : ''
                    }`}
                >
                    Login
                </div>
                <div
                    onClick={() => {
                        history.push('/home');
                    }}
                    className={`nav-item ${
                        window.location.pathname == '/home' ? 'active' : ''
                    }`}
                >
                    HOme
                </div>
            </div>
        </>
    );
}

export default withRouter(Navbar);
