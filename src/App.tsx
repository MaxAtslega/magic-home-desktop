import React, { Component } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

// Components
import TitleBar from './components/Titlebar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Devices from './routes/Devices';
import Settings from './routes/Settings';
import AllDevices from './routes/AllDevices/index';
import AddDevice from './routes/AddDevice';
import Information from "./routes/Information";
import Device from "./routes/Device";

export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <TitleBar backgroundColor={'#1F9DDA'} title="Magic-Home Desktop" />
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/device" element={<Device />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/information" element={<Information />} />
            <Route path="/add-device" element={<AddDevice />} />
            <Route path="/add" element={<AllDevices />} />
            <Route path="*" element={<Navigate to={'/devices'} />} />
          </Routes>
        </Main>
      </Router>
    );
  }
}

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

render(<App />, mainElement);
