import React, { Component } from "react";
import PropTypes from "prop-types";
import BookItem from "./book";

class Category extends Component {
  static propTypes = {
    books: PropTypes.array,
  };

  render() {
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.categorie}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((b) => (
                  <BookItem
                    key={b.id}
                    book={b}
                    onUpdateBooks={this.props.onUpdateBooks}
                  />
                ))}{" "}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Category