import React, { Component } from 'react'
import Header from '../../components/Header'
import { Container } from './Information.styles'

export default class Information extends Component {
  render () {
    return (
      <Container>
        <Header title={'Information'}/>
        <p>Developed by Max Atslega</p>
        <a href={'https://github.com/MaxAtslega/magic-home-desktop'}>GitHub</a>
      </Container>
    )
  }
}
