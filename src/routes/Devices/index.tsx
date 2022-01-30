import React, { Component } from 'react';

import Header from '../../components/Header';
import DeviceList from '../../components/DeviceList';
import {
  Device as MagicHomeDevice,
  getDevicesInformations,
} from '../../utils/magic-home';
import { GrAdd } from 'react-icons/gr';
import { Button } from './Devices.styled';
import Store from 'electron-store';
import Device from './components/Device';

const store = new Store();
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
  devices: MagicHomeDevice[];
  loading: boolean;
}

export default class Devices extends Component<Props, State> {
  state: State = {
    devices: [],
    loading: true,
  };

  async getDevices() {
    const devicesFromStore: any[] = Array.isArray(store.get('devices'))
      ? (store.get('devices') as any[])
      : [];

    await getDevicesInformations(devicesFromStore).then((devices) => {
      this.setState({
        devices: devices,
        loading: false,
      });
    });
  }

  async componentDidMount() {
    await this.getDevices();
  }

  render() {
    return (
      <React.Fragment>
        <Header title={'Devices'}>
          <Button to={'/add'}>
            <GrAdd />
          </Button>
        </Header>
        {this.state.loading ? <p>Devices are loading</p> : null}
        {this.state?.devices.length === 0 && !this.state.loading ? (
          <p>No devices found. Add it!</p>
        ) : null}
        <DeviceList>
          {this.state.devices.map((device) => {
            return (
              <Device
                key={device.id}
                address={device.address}
                currentDeviceColor={device.color ? device.color : {red: 0, blue: 0, green: 0}}
                name={device.name ? device.name : device.id}
                description={device.model}
                online={device.on}
              />
            );
          })}
        </DeviceList>
      </React.Fragment>
    );
  }
}
