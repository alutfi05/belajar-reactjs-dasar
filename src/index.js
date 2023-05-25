import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const author = 'Bessel van der Kolk M.D.';
const Book = () => {
    const title = 'The Body Keeps the Score';
    return (
        <article className="book">
            <img src="./images/book-1.jpg" alt="The Body Keeps the Score" />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
