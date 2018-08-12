import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends React.Component {
  state = {
    query: '',
    searchResults: []
  }
  fetchResults(query) {
    this.setState({ query })
    BooksAPI.search(query).then((response) => {
      if (response) {
        this.setState({ searchResults: response })
      } else {
        this.setState({ searchResults: [] })
      }
    })
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => {
                this.fetchResults(e.target.value)
              }}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(this.state.searchResults.length > 0) && (
              this.state.searchResults.map(books => (<li key={books.id}><Book updateBooks={this.props.updateBooks} parentState={this.props.parentState} book={books} /></li>))
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage