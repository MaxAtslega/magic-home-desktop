import React, { Component } from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Components
import TitleBar from './components/Titlebar'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

// Routes
import Devices from './routes/Devices'
import Groups from './routes/Groups'
import Device from './routes/Device'
import Information from './routes/Information'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <TitleBar backgroundColor={'#1F9DDA'} title="Magic-Home Desktop"/>
        <Sidebar/>
        <Main>
          <Switch>
            <Route exact path="/devices" component={Devices}/>
            <Route exact path="/groups" component={Groups}/>
            <Route exact path="/information" component={Information}/>
            <Route exact path="/device/:id" component={Device}/>
            <Redirect from='/' to="/devices" />
          </Switch>
        </Main>
      </BrowserRouter>
    )
  }
}

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

render(<App />, mainElement)
