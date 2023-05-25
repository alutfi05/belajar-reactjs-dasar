import React from 'react';
import ReactDOM from 'react-dom/client';

const Greeting = () => {
    return (
        <>
            <div>
                <h2>hello people</h2>
                <ul>
                    <li>
                        <a href="#">hello world</a>
                    </li>
                </ul>
            </div>
            <h2>hello world</h2>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
