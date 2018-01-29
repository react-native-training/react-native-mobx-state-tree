import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button
} from 'react-native';

import { observer } from 'mobx-react'

import BookStore from './BookStore'

const initialState = {
  title: '',
  author: '',
  read: false
}

@observer
export default class App extends Component<{}> {
  state = initialState
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  addBook() {
    if (!this.state.title || !this.state.author) return
    BookStore.addBook(this.state)
    this.setState(initialState)
    this.titleRef.focus()
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.title}
          placeholder='title'
          onChangeText={value => this.onChangeText('title', value)}
          style={styles.input}
          autoCorrect={false}
          ref={title => this.titleRef = title}
        />
        <TextInput
          value={this.state.author}
          placeholder='author'
          onChangeText={value => this.onChangeText('author', value)}
          style={styles.input}
          autoCorrect={false}
        />
        <Text style={styles.label}>Read? {this.state.read ? 'Yes' : 'No'}</Text>
        <Switch
          onValueChange={value => this.setState(() => ({ read: value }))}
          value={this.state.read}
        />
        <Button
          onPress={this.addBook.bind(this)}
          title='Add Book'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  input: {
    height: 45,
    backgroundColor: '#ededed',
    borderRadius: 3,
    paddingHorizontal: 8,
    marginBottom: 10
  },
  label: {
    marginBottom: 5
  }
});
