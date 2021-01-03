import React, { Component } from 'react'
import { Container, DeviceName, ModelName, ControlItems, ControlItem } from './Device.styles'
import { BiRocket } from 'react-icons/bi'
import { FiPower } from 'react-icons/Fi'

interface Props {
  currentDeviceColor: string;
  name: string;
  model: string;
  online: boolean;
}

export default class Device extends Component<Props> {
  constructor (props: Props) {
    super(props)
  }

  render () {
    return (
      <Container colorBorder={this.props.online ? this.props.currentDeviceColor : '#E3E5E8'}>
        <DeviceName>{this.props.name}</DeviceName>
        <ModelName>{this.props.model}</ModelName>
        <ControlItems>
          {this.props.online ? <ControlItem colorItem={'#130f40'}><BiRocket/></ControlItem> : null}
          <ControlItem colorItem={this.props.online ? '#44bd32' : '#ff0000'}><FiPower/></ControlItem>
        </ControlItems>
      </Container>
    )
  }
}
