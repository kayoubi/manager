import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'

import reducers from './reducers'
import LoginForm from './components/LoginForm'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    )
  }
}

export default App