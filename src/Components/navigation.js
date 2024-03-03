import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Components 
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [error, setError] = React.useState('');

    // Function to handle login 
    const handleLogin = (email, password) => {
        if (email.endsWith("@mix.wvu.edu")) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Invalid username or Password');
        }
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {/* Redirect to login page if not logged in */}
                    {isLoggedIn ? <Redirect to="/home" /> : <LoginPage onLogin={handleLogin} error={error} />}
                </Route>
                <Route path="/home">
                    {/* Show home page if logged in */}
                    {isLoggedIn ? <HomePage /> : <Redirect to="/" />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

