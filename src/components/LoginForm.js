import React, { Component } from 'react'
import { Card, CardSection, Header, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  render() {
    console.log(this.props.email)
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
  return {email: state.auth.email}
}

export default connect(mapStateToProps, { emailChanged })(LoginForm)