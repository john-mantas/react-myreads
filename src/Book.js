import React from 'react'

class Book extends React.Component {
  render() {
    let image, title, authors
    this.props.book.imageLinks ? image = this.props.book.imageLinks.smallThumbnail : image = ''
    this.props.book.title ? title = this.props.book.title : title = 'No title available'
    this.props.book.authors ? authors = this.props.book.authors : authors = 'No authors available'

    return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
    );
  }
}

export default Book;