import React, {Component} from 'react'
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import {login} from '../actions/user.js'
import {connect} from 'react-redux'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  setUsername(e) {
     this.setState({username: e.target.value });
  }

  setPassword(e) {
     this.setState({password: e.target.value });
  }

  login() {
    this.props.dispatch(login(this.state.username, this.state.password))
  }

  render() {
    return (
      <div>
        <h1>PHC</h1>
        <form>
          <FormGroup>
            <ControlLabel>username</ControlLabel>
            <FormControl
              type="text"
              placeholder="username"
              onChange = {this.setUsername.bind(this)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>password</ControlLabel>
            <FormControl
              type="password"
              placeholder="password"
              onChange = {this.setPassword.bind(this)}
            />
          </FormGroup>
        </form>
        <Button bsStyle="primary" className = "test" onClick={this.login.bind(this)}>Login</Button>
      </div>
    )
  }
}

export default connect()(Login)
