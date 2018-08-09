import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './search';
import ListBooks from './list-books'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" render={() => (<ListBooks state={this.state} />)} />
      </div>
    )
  }
}

export default BooksApp
