import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksApi from "../BooksAPI";
import _ from "lodash";
import BookItem from "./book";

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", books: [] };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  search(query) {
    BooksApi.search(query)
      .then((books) => {
        const oldbooks = this.props.books;
        this.mergeBooks(books, oldbooks);
        this.setState({ books: books });
      })
      .catch((err) => console.log(err));
  }

  mergeBooks(newbooks, oldbooks) {
    for (let i = 0; i < newbooks.length; i++) {
      for (let j = 0; j < oldbooks.length; j++) {
        if (newbooks[i].id === oldbooks[j].id) {
          newbooks[i].shelf = oldbooks[j].shelf;
        }
      }
    }
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      query: value,
    }));
  }

  handleKeyDown = () => {
    this.state.query !== "" && this.search(this.state.query);
  };

  render() {
    const { query, books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleChange}
              // codeit from searching - to wait for part of word or completly word
              onKeyDown={_.debounce(this.handleKeyDown, 500)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query !== "" &&  books.length > 0 &&
              this.state.books.map((bookitem) => (
                <BookItem
                  key={bookitem.id}
                  book={bookitem}
                  onUpdateBooks={this.props.onUpdateBooks}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBook