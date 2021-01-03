/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { Container, Title, AddButton } from './Header.styles'
import { GrAdd } from 'react-icons/gr'

interface Props {
  title: string;
  addButton?: any;
}

export default class App extends Component<Props> {
  constructor (props: Props) {
    super(props)
  }

  render () {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        {this.props.addButton ? <AddButton onClick={this.props.addButton}><GrAdd/></AddButton> : null}
      </Container>
    )
  }
}
