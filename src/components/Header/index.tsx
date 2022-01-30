/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container, Title } from './Header.styled';
interface Props {
  title: string;
  addButton?: boolean;
  children?: any;
}

export default class App extends Component<Props> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        {this.props.children ? this.props.children : null}
      </Container>
    );
  }
}
