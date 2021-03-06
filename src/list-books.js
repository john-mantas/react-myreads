import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends React.Component {
  placeTo = (sh) => (
    this.props.state.books
      .filter((books) => (books.shelf === sh))
  )
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" updateBooks={this.props.updateBooks} shelf={this.placeTo('currentlyReading')} />
            <Bookshelf title="Want to Read" updateBooks={this.props.updateBooks} shelf={this.placeTo('wantToRead')} />
            <Bookshelf title="Read" updateBooks={this.props.updateBooks} shelf={this.placeTo('read')} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks