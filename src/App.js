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
  updateBooks = () => (
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })    
  )
  componentDidMount() {
    this.updateBooks()
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (<SearchPage updateBooks={this.updateBooks} parentState={this.state} />)} />
        <Route exact path="/" render={() => (<ListBooks updateBooks={this.updateBooks} state={this.state} />)} />
      </div>
    )
  }
}

export default BooksApp
