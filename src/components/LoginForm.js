import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Spinner, Input, Button } from './common'
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

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>
    }

    return (
      <Button onPress={this.onLogin.bind(this)}>
        Login
      </Button>
    )
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

        <Text style={styles.errorTextStyle}>{this.props.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({auth}) => {
  return {
    email: auth.email,
    password: auth.password,
    user: auth.user,
    error: auth.error,
    loading: auth.loading
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)