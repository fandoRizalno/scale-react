import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the Scale App, your
                    personal health tracker!</h1>
                <Link to="/personalData">
                    <button>Get Started</button>
                </Link>
            </header>
        </div>
    );
}

export default WelcomePage;
