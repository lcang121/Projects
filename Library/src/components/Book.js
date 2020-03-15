import React from 'react';

const Book = ({ title, author, pages, bookmark }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark: {bookmark ? 'yes' : 'no'}</p>
        </section>
    )
}

export default Book;