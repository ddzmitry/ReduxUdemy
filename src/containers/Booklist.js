
import React, { Component } from 'react';
import { connect  } from 'react-redux';
import {selectBook  } from '../actions/index'
import { bindActionCreators } from 'redux'


class Booklist extends Component {

renderList() {

    return this.props.books.map((book)=>{
// CALLING Select book from actions -> index.js
        return (
            <li onClick={() => this.props.selectBook(book)}
             key={book.title}
              className="list-group-item"> {book.title} </li>
        )
    })

    }
  render() {
    return ( 
        <ul className="list-group col-sm-4"> 
            {this.renderList()}
         </ul>
    )
  }
}
// glue between react an redux VERY IMPORTANT!!!!
// LOOK INTO index.js in reducers 
function mapStateToProps(state) {

    // Will show up as props inside of the booklist! 
    return {
        // these books become props for container booklist
        books : state.books
    };
}
// Anything returned will be returned as props on Booklist container
function mapDispatchToProps(dispatch){
    //whenever select book is callled res should be passed to all of our reducers
    // this.props.select book 
    return bindActionCreators({ selectBook :  selectBook}, dispatch)
}

// Promote BokList from a component to a container 
// with new dispatch method to make it available as prop
export default connect (mapStateToProps,mapDispatchToProps ) (Booklist);

