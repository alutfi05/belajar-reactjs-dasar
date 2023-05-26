import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
    author: 'Bessel van der Kolk M.D.',
    title: 'The Body Keeps the Score',
    img: './images/book-1.jpg',
};

const secondBook = {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
};

const BookList = () => {
    return (
        <section className="booklist">
            <Book
                img={firstBook.img}
                title={firstBook.title}
                author={firstBook.author}
            />
            <Book
                img={secondBook.img}
                title={secondBook.title}
                author={secondBook.author}
            />
        </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
