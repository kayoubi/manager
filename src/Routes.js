import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import Employee from './components/Employee'

const RoutersComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login"/>
      </Scene>
      <Scene key="main">
        <Scene key="employeeList" component={EmployeeList} title="Employee List" initial
          rightTitle="Add" onRight={() => {Actions.employee()}}/>
        <Scene key="employee" component={Employee} title="Employee"/>
      </Scene>
    </Router>
  )
}

export default RoutersComponent;