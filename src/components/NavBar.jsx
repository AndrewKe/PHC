import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class NavBar extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Link to = "/tables">tables</Link>
          <Link to = "/graphs">graphs</Link>
          <Link to = "/user">user</Link>
        </div>

        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
