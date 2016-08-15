import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              PHC Food Fortification Tracker
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#"><Link to = "/tables">Staples</Link></NavItem>
            <NavItem eventKey={1} href="#"><Link to = "/graphs">Graphs</Link></NavItem>
          </Nav>
        </Navbar>
      {this.props.children}
      </div>
    )
  }
}

export default NavBar;
