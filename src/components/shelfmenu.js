import React,{Component} from "react";
class ShelfMenu extends Component{
  onValueChange(event) {
    const updatedBookItem = this.props.book;
    updatedBookItem.shelf = event.target.value;
    this.props.onUpdateBooks(updatedBookItem);
  }  
  render(){
        return(
            <div className="book-shelf-changer">
            <select value={this.props.book.shelf ? this.props.book.shelf : "none"}
          onChange={this.onValueChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
    }
}

export default ShelfMenu