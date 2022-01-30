import React from 'react';

import { FaLightbulb } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { Container, Navigator, Item, Separator, Link } from './Sidebar.styled';
import { BsTwitch } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  return (
    <Container>
      <Navigator>
        <Item>
          <Link
            className={location.pathname === '/settings' ? 'selected' : ''}
            to={'/settings'}
          >
            <BsTwitch />
          </Link>
        </Item>
        <Item>
          <Link
            className={location.pathname === '/devices' ? 'selected' : ''}
            to={'/devices'}
          >
            <FaLightbulb />
          </Link>
        </Item>
        <Separator />
        <Item>
          <Link
            className={location.pathname === '/information' ? 'selected' : ''}
            to={'/information'}
          >
            <AiOutlineInfoCircle />
          </Link>
        </Item>
      </Navigator>
    </Container>
  );
}
