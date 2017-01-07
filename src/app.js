import React, { Component } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(() => {})}>
        <Text>Hello World</Text>
      </Provider>
    )
  }
}

export default App