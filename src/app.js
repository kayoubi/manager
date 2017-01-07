import React, { Component } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBFuu2RotqE8jUJTkC-1xEUBVvD-uDAoQ0",
        authDomain: "react-native-auth-8f797.firebaseapp.com",
        databaseURL: "https://react-native-auth-8f797.firebaseio.com",
        storageBucket: "react-native-auth-8f797.appspot.com",
        messagingSenderId: "36348196574"
      }
    );
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Text>Hello World</Text>
      </Provider>
    )
  }
}

export default App