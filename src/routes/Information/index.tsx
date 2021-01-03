import React, { Component } from 'react'
import Header from '../../components/Header'
import { remote } from 'electron'
import { Container } from './Information.styles'

export default class Groups extends Component {
  render () {
    return (
      <Container>
        <Header title={'Information'}/>
        <p>Version: {remote.app.getVersion()}</p>
        <p>Developed by Max Atslega</p>
        <a href={'https://github.com/MaxAtslega/magic-home-desktop'}>GitHub</a>
      </Container>
    )
  }
}
