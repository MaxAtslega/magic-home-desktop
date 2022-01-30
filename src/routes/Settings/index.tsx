import React, { Component } from 'react';
import Store from 'electron-store';

const store = new Store();
export default class Settings extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{JSON.stringify(store.get('devices'))}</p>
        <button onClick={() => store.delete('devices')}>
          Delete all devices
        </button>
      </React.Fragment>
    );
  }
}
