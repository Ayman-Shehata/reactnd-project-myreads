import React, { Component } from "react";
import Category from "./category";
import { Link } from "react-router-dom";

 class Bookcase extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.props.categories.map((cat) => (
            <Category
            categorie={cat.name}
            onUpdateBooks={this.props.onUpdateBooks}
            key={cat.key}
            books={this.props.onCategorizeBooks(cat.key)}
          />
        ))}
        
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Bookcase
// udacity review
// Since this component doesn't have a state or a lifecycle method, I suggest writing it as a Function Component instead of a Class Component. A function component example :

// import React from 'react';

// const MyComponent = () => {  // insert props as arguments here if any

//    const someVariable =  "..."; // local variable

//    function someFunction (book) { ... } // local function

//    return (
//      {/* JSX code here */}
//    )
// }

// export default MyComponent;