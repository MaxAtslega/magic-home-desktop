import React, { Component } from 'react';
import Header from '../../components/Header';
import DeviceList from '../../components/DeviceList';
import Device from './components/Device';
import { getAllDeviceInTheNetwork } from '../../utils/magic-home';
import { Discovery } from 'magic-home';
import Store from 'electron-store';
import { AiOutlineReload } from 'react-icons/ai';
import { Button } from './AllDevices.styled';

const store = new Store();

interface State {
  devices: Discovery.DiscoveryResult[];
  enable: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export default class AllDevices extends Component<Props, State> {
  state: State = {
    devices: [],
    enable: false,
  };

  getDevices() {
    const devicesFromStore: any[] = Array.isArray(store.get('devices'))
      ? (store.get('devices') as any[])
      : [];

    getAllDeviceInTheNetwork().then((devices) => {
      const uniqueDevices = [
        ...new Map(devices.map((item) => [item.id, item])).values(),
      ];
      const devicesArray: any[] = [];
      uniqueDevices.map((item) => {
        if (devicesFromStore.findIndex((x) => x.id === item.id) === -1) {
          devicesArray.push(item);
        }
      });

      this.setState({
        devices: devicesArray,
        enable: true,
      });
    });
  }

  componentDidMount() {
    this.getDevices();
  }

  render() {
    return (
      <React.Fragment>
        <Header title={'Add Device'}>
          <Button
            className={this.state.enable ? 'enable' : 'disable'}
            onClick={() => {
              this.setState({
                enable: false,
                devices: [],
              });
              this.getDevices();
            }}
          >
            <AiOutlineReload />
          </Button>
        </Header>
        {!this.state.enable ? <p>Devices to add are loading</p> : null}
        {this.state?.devices.length === 0 && this.state.enable ? (
          <p>No devices found on your local network. Try it again</p>
        ) : null}
        <DeviceList>
          {this.state.devices.map((device: Discovery.DiscoveryResult) => {
            return (
              <Device
                key={device.address}
                model={device.model}
                address={device.address}
                id={device.id}
              />
            );
          })}
        </DeviceList>
      </React.Fragment>
    );
  }
}
