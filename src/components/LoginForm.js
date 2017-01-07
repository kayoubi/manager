import React, { Component } from 'react'
import { Card, CardSection, Header, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onLogin() {
    this.props.loginUser(this.props.email, this.props.password)
  }

  render() {
    console.log(this.props.user)
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.com"
            onChangeText={this.onEmailChanged.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChanged.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onLogin.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)