import React, {Component} from 'react'
import { Modal , Button} from 'react-bootstrap'
import ColumnFormGroup from './ColumnFormGroup.js'
import {updateRow, deleteRow} from '../../actions'
import {connect} from 'react-redux'
import {closeModal} from '../../actions/modal'

class EditDataModal extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.state);

    return (
      <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit Data</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {
              this.props.columns.map((column) => {
                return <ColumnFormGroup initialValue = {this.props.row[column.name]} key = {column.name} column = {column} onChange = {(value) => {
                    this.setState({
                      [column.name]: value
                    })
                  }}/>
              })
            }
          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle="danger" onClick = {() => {
                this.props.dispatch(deleteRow(this.props.row))
                this.props.dispatch(closeModal())
            }}>Delete</Button>
            <Button onClick = {() => this.props.dispatch(closeModal())}>Cancel</Button>
            <Button bsStyle="primary" onClick = {() => {
                this.props.dispatch(updateRow(Object.assign(this.props.row, this.state)))
                this.props.dispatch(closeModal())
            }}>Save</Button>
          </Modal.Footer>

      </Modal.Dialog>)
  }
}

export default connect()(EditDataModal)
