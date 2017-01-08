import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import { getEmployees } from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component {
  componentWillMount() {
    this.props.getEmployees();

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(newProps) {
    this.createDataSource(newProps);
  }

  createDataSource( {employees} ) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return (
      <ListItem employee={employee} />
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employee.all, (val, uid) => {
    return {...val, uid}
  });

  return { employees }
};

export default connect(mapStateToProps, {getEmployees})(EmployeeList)