import { AppRegistry } from 'react-native';
import Books from './src/Books';
import AddBook from './src/AddBook';

import {TabNavigator} from 'react-navigation'

const App = TabNavigator({
  AddBook: { screen: AddBook },
  Books: { screen: Books }
})

AppRegistry.registerComponent('BookKeeper', () => App);
