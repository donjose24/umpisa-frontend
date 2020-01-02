import React from 'react';
import {Link} from 'react-router-dom';
import { Menu as SemanticMenu} from 'semantic-ui-react';

const Menu = () => {
  return (
  <SemanticMenu> 
    <SemanticMenu.Item
      as={Link}
      to='/'
    >
    <i className="home icon"></i>
    Home
    </SemanticMenu.Item>
    <SemanticMenu.Item
      as={Link}
      to='/topup'
    >
    <i className="money bill alternate icon"></i>
    Top Up
    </SemanticMenu.Item>
    <SemanticMenu.Item
      as={Link}
      to='/balance'
    >
    <i className="dollar sign icon"></i>
    Balance
    </SemanticMenu.Item>
    <SemanticMenu.Item
      as={Link}
      to='/account'
    >
    <i className="user icon"></i>
    My Account Details
    </SemanticMenu.Item>
    <SemanticMenu.Item
      as={Link}
      to='/history'
    >
    <i className="book icon"></i>
    Transaction History
    </SemanticMenu.Item>
  </SemanticMenu>
  )
}

export default Menu;
