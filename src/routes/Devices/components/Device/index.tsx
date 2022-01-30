import React, { Component } from 'react';
import {
  Container,
  DeviceName,
  Description,
  ControlItems,
  ControlItem,
  ControlItemLink
} from './Device.styled';
import { BiRocket } from 'react-icons/bi';
import { FiPower } from 'react-icons/Fi';
import { turnOffByAddress, turnOnByAddress } from "../../../../utils/magic-home";

interface Props {
  currentDeviceColor: { red: number; green: number; blue: number };
  name: string;
  description: string;
  address: string;
  online: boolean;
}

interface State {
  online: boolean;
  currentDeviceColor: { red: number; green: number; blue: number };
}

export default class Device extends Component<Props, State> {

  state = {
    online: this.props.online,
    currentDeviceColor: this.props.currentDeviceColor,
  }

  async toggleTurnOfOn() {
    if (this.state.online){
      const device = await turnOffByAddress(this.props.address);

      this.setState({
        online: false,
        currentDeviceColor: device.color
      })
    } else {
      const device = await turnOnByAddress(this.props.address);

      this.setState({
        online: true,
        currentDeviceColor: device.color
      })
    }
  }

  render() {
    return (
      <Container
        colorBorder={
          this.state.online ? `rgb(${this.state.currentDeviceColor.red}, ${this.state.currentDeviceColor.green}, ${this.state.currentDeviceColor.blue});` : '#E3E5E8'
        }
      >
        <DeviceName>{this.props.name}</DeviceName>
        <Description>{this.props.description}</Description>
        <ControlItems>
          {this.state.online ? (
            <ControlItemLink state={{
              name: this.props.name,
              address: this.props.address,
              color: this.state.currentDeviceColor,
            }} to={ "/device"} coloritem={'#130f40'}>
              <BiRocket />
            </ControlItemLink>
          ) : null}
          <ControlItem onClick={() => this.toggleTurnOfOn()} coloritem={this.state.online ? '#44bd32' : '#ff0000'}>
            <FiPower />
          </ControlItem>
        </ControlItems>
      </Container>
    );
  }
}
