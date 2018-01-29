import { types, destroy } from "mobx-state-tree"

const Book = types.model('Book', {
    title: types.string,
    author: types.string,
    read: false
}).actions(self => ({
    toggleRead() {
        self.read = !self.read
    }
}))

const BookStore = types.model({
    books: types.array(Book)
  })
  .views(self => ({
    get readBooks() {
      return self.books.filter(book => book.read)
    },
    booksByAuthor(author) {
      return self.books.filter(book => book.author === author)
    }
  })

  )
  .actions(self => ({
    addBook(book) {
      self.books.push(book)
    },
    remove(book) {
      destroy(book)
    }
  }))
  .create({
    books: []
  })

export default BookStore
