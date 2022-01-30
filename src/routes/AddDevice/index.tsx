import React, { Component, useRef, useState } from 'react';
import Header from '../../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { Section, Button, Input } from './AddDevice.styled';
import Store from 'electron-store';

const store = new Store();

export default function AddDevice() {
  const location = useLocation();
  const navigate = useNavigate();

  const state: { id: string; address: string; model: string } =
    location.state as { id: string; address: string; model: string };
  const [input, setInput] = useState(state.id);

  async function saveNewDevice() {
    const devices: any[] = Array.isArray(store.get('devices'))
      ? (store.get('devices') as any[])
      : [];
    devices.push({
      ...state,
      name: input,
    });
    await store.set('devices', devices);
    await navigate('/devices');
  }

  return (
    <React.Fragment>
      <Header title={'New Device'} />

      <Section>Id: {state.id ? state.id : 'unknown'}</Section>
      <Section>Address: {state.address ? state.address : 'unknown'}</Section>
      <Section>Model: {state.model ? state.model : 'unknown'}</Section>
      <Section>
        Enter a name for this device:
        <Input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </Section>
      <Button onClick={() => saveNewDevice()}>Save</Button>
    </React.Fragment>
  );
}
