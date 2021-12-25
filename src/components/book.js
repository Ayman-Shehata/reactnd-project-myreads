import React, { Component } from "react";
import ShelfChanger from "./shelfchanger";

class BookItem extends Component {

  render() {
   const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{width: 128, height: 193, backgroundImage: `url(${ book.imageLinks
                    ? book.imageLinks.thumbnail
                    : "icons/book-placeholder.svg"
                })`,
              }}
            />
            <ShelfChanger book={book} onUpdateBooks={this.props.onUpdateBooks} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}
export default BookItem