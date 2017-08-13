
export function selectBook(book) {

    // console.log(`Book was selected ${book.title}`)
// Select book is an action creator it needs to return an action and object 
//with type of property
    return {
      type: "BOOK_SELECTED",
      payload: book
    }
}