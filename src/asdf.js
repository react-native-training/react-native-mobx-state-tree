import { types, destroy } from "mobx-state-tree"

const Book = types.model('Book', {
    title: types.string,
    author: types.string,
    read: false
})

const Books = types.model('Books', {
  books: types.array(Book)
})

const store = Books.create('Book Store', )

export default store
