import React, { Component } from 'react'

import Header from '../../components/Header'
import Device from './components/Device'
import DeviceList from './components/DeviceList'

export default class Devices extends Component {
  render () {
    return (
      <React.Fragment>
        <Header title={'Devices'}/>
        <DeviceList>
          <Device online={true} currentDeviceColor={'#ff0000'} model={'Test'} name={'Test'}/>
          <Device online={false} currentDeviceColor={'#ff0000'} model={'Test'} name={'Test'}/>
          <Device online={true} currentDeviceColor={'#ff0000'} model={'Test'} name={'Test'}/>
          <Device online={true} currentDeviceColor={'#ff0000'} model={'Test'} name={'Test'}/>
          <Device online={true} currentDeviceColor={'#ff0000'} model={'Test'} name={'Test'}/>
          <Device online={true} currentDeviceColor={'#ff0000'} model={'Test'} name={'Test'}/>
          <Device online={true} currentDeviceColor={'#ff0000'} model={'Test'} name={'Test'}/>
        </DeviceList>
      </React.Fragment>
    )
  }
}
