import React, { Component } from 'react'
import Header from '../../components/Header'

import GroupList from './components/GroupList'
import Group from './components/Group'

export default class Groups extends Component {
  addGroup () {
    console.log('test')
  }

  render () {
    return (
      <React.Fragment>
        <Header addButton={this.addGroup} title={'Groups'}/>
        <GroupList>
          <Group/>
        </GroupList>
      </React.Fragment>
    )
  }
}
