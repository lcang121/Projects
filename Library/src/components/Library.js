import React from 'react';
import Book from './Book';


class Library extends React.Component {

    state = {
        open: true,
        freeBookmark: true
    }

    toggleState = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { books } = this.props;
        return (
            <div>
                <h1>The Library is {this.state.open ? 'open' : 'closed'} </h1>
                <button onClick={this.toggleState}>Change</button>
                {books.map((book, key) =>
                    <Book key={key} title={book.title} author={book.author} pages={book.pages} bookmark={this.state.freeBookmark} />)}
            </div>
        )
    }
}

export default Library;