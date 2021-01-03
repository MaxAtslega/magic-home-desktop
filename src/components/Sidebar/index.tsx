import React, { Component } from 'react'

import { FaLightbulb } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiNetworkChart } from 'react-icons/bi'

import { Container, Navigator, Item, Separator, Link } from './Sidebar.styles'

export default class Index extends Component {
  render () {
    return (
      <Container>
        <Navigator>
          <Item><Link activeClassName='selected' to={'/devices'}><FaLightbulb/></Link></Item>
          <Item><Link activeClassName='selected' to={'/groups'}><BiNetworkChart/></Link></Item>
          <Separator/>
          <Item><Link activeClassName='selected' to={'/information'}><AiOutlineInfoCircle/></Link></Item>
        </Navigator>
      </Container>
    )
  }
}
