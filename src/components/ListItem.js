import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux'

import { selectEmployee } from '../actions'
import { CardSection } from './common';

class ListItem extends Component {
  viewEmployee() {
    this.props.selectEmployee(this.props.employee);
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.viewEmployee.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  employee: React.PropTypes.object.isRequired
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(null, {selectEmployee})(ListItem);