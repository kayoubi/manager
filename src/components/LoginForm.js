import React, { Component } from 'react'
import { Card, CardSection, Header, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  render() {
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
          <Button>
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
    password: state.auth.password
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)