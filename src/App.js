import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import SearchPage from './search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }
  placeTo = (sh) => (
    this.state.books
    .filter((books)=>(books.shelf === sh))
  )
  componentDidMount() {
    BooksAPI.getAll().then(books=>{
      this.setState({books})
    })
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title="Currently Reading" shelf={this.placeTo('currentlyReading')}/>
                <Bookshelf title="Want to Read" shelf={this.placeTo('wantToRead')}/>
                <Bookshelf title="Read" shelf={this.placeTo('read')}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
