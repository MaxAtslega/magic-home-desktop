import React, { Component } from 'react';
import { Container, Title, SubTitle, Button } from './Device.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  address: string;
  model: string;
  id: string;
  history?: any;
}

export default function Device(props: Props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>{props.id}</Title>
      <SubTitle>Address: {props.address}</SubTitle>
      <SubTitle>Model: {props.model}</SubTitle>
      <Button
        onClick={() =>
          navigate('/add-device', {
            state: { id: props.id, address: props.address, model: props.model },
          })
        }
      >
        Add
      </Button>
    </Container>
  );
}
