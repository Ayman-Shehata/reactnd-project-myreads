import React, { Component } from "react";
//import { NotificationContainer, NotificationManager } from 'react-notifications';

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);

  }

  onChangeValue(event) {
    const updatedBook = this.props.book;
    const oldShelf = updatedBook.shelf;
    updatedBook.shelf = event.target.value;
    this.props.onUpdateBooks(updatedBook);
    this.showAlert(oldShelf, updatedBook.shelf)
  }

  showAlert(oldShelf, newShelf) {
    alert(`Sucssefully move book from ${oldShelf} to ${newShelf}`)
    //this.createNotification('info')
  }
//   createNotification = (type) => {
//     return () => {
//       switch (type) {
//         case 'info':
//           NotificationManager.info('Info message');
//           break;
//         case 'success':
//           NotificationManager.success('Success message', 'Title here');
//           break;
//         case 'warning':
//           NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//           break;
//         case 'error':
//           NotificationManager.error('Error message', 'Click me!', 5000, () => {
//             alert('callback');
//           });
//           break;
//       }
//     };
//   };

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select
            value={this.props.book.shelf ? this.props.book.shelf : "none"}
            onChange={this.onChangeValue}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}
export default ShelfChanger