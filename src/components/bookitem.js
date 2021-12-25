import React, { Component } from "react";
import ShelfMenu from "./shelfmenu";

export default class BookItem extends Component {
  
  render() {
   const { bookitem } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  bookitem.imageLinks
                    ? bookitem.imageLinks.thumbnail
                    : "icons/book-placeholder.svg"
                })`,
              }}
            />
            <ShelfMenu book={bookitem} onUpdate={this.props.onUpdateBooks} />
          </div>
          <div className="book-title">{bookitem.title}</div>
          <div className="book-authors">{bookitem.authors}</div>
        </div>
      </li>
    );
  }
}
