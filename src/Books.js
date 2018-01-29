import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { observer } from 'mobx-react'

import BookStore from './BookStore'

@observer
export default class App extends Component<{}> {
  render() {
    const { books } = BookStore
    console.log('BookStore: ', BookStore)
    console.log('readBooks:', BookStore.readBooks)
    console.log('booksByErnestCline: ', BookStore.booksByAuthor('Ernest Cline'))
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView>
          {
            books.map((book, index) => (
              <TouchableOpacity onPress={book.toggleRead.bind(this)} key={index} >
                <View style={styles.book}>
                  <Text style={styles.bookTitle}>{book.title}</Text>
                  <Text style={styles.bookDescription}>{book.author}</Text>
                  <Text>Read: {book.read ? 'yes': 'no'}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    paddingBottom: 10
  },
  book: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .15)'
  },
  bookTitle: {
    fontSize: 16
  },
  bookDescription: {
    color: 'rgba(0, 0, 0, .4)',
    fontSize: 12,
    marginVertical: 4
  }
});
