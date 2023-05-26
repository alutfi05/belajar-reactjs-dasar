import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
    {
        author: 'Bessel van der Kolk M.D.',
        title: 'The Body Keeps the Score',
        img: './images/book-1.jpg',
        id: 1,
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
        id: 2,
    },
];

const BookList = () => {
    const getBook = (id) => {
        const findBook = books.find((book) => book.id === id);
        console.log(findBook);
    };
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book {...book} key={book.id} getBook={getBook} />;
            })}
        </section>
    );
};

const Book = (props) => {
    const { img, title, author, getBook, id } = props;
    // console.log(props);
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <button onClick={() => getBook(id)}>click me</button>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
