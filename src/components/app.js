import React, { Component } from 'react';
import Booklist from  '../containers/Booklist';
import BookDetail from '../containers/bookDetail'
export default class App extends Component {
  render() {
    return (
      <div>
        <Booklist/>
        
        <BookDetail/>
      </div>    );
  }
}
