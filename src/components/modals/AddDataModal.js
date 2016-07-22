import React, {Component} from 'react'
import { Modal , Button} from 'react-bootstrap'
import ColumnFormGroup from './ColumnFormGroup.js'
import {addRow} from '../../actions'
import {connect} from 'react-redux'
import {closeModal} from '../../actions/modal'

class AddDataModal extends Component {

  constructor(props){
    super(props)
    this.state = {}

    props.columns.map((column) => {
      this.state[column.name] =  column.options[0]
    })
  }

  render() {
    console.log(this.state);

    return (
      <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {
              this.props.columns.map((column) => {
                return <ColumnFormGroup key = {column.name} column = {column} onChange = {(value) => {
                    this.setState({
                      [column.name]: value
                    })
                  }}/>
              })
            }
          </Modal.Body>

          <Modal.Footer>
            <Button onClick = {() => this.props.dispatch(closeModal())}>Close</Button>
            <Button bsStyle="primary" onClick = {() => {
                this.props.dispatch(addRow(this.state))
                this.props.dispatch(closeModal())
            }}>Save changes</Button>
          </Modal.Footer>

      </Modal.Dialog>)
  }
}

export default connect()(AddDataModal)
