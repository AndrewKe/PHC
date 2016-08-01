import React, {Component} from 'react'
import { Modal , Button} from 'react-bootstrap'
import ColumnFormGroup from './ColumnFormGroup'
import {closeModal} from '../../actions/modal'
import {connect} from 'react-redux'

class CustomModal extends Component {

  constructor(props){
    super(props)
    this.state = {}

    this.props.columns.map((column) => {
      if (this.props.initial && this.props.initial[column.name]){
        this.state[column.name] = this.props.initial[column.name]
      }
      else if (column.options){
        this.state[column.name] =  column.options[0]
      }
    })
  }

  closeModal() {
    this.props.dispatch(closeModal())
  }

  onAdd() {
    this.closeModal()
    this.props.onAdd(this.state)
  }

  onSave() {
    this.closeModal()
    this.props.onSave(this.state)
  }

  onDelete() {
    this.closeModal()
    this.props.onDelete(this.state)
  }

  editFooter() {
    return (
      <Modal.Footer>
        <Button bsStyle="danger" onClick = {this.onDelete.bind(this)}>Delete</Button>
        <Button onClick = {this.closeModal.bind(this)}>Cancel</Button>
        <Button bsStyle="primary" onClick = {this.onSave.bind(this)}>Save</Button>
      </Modal.Footer>
    )
  }

  addFooter() {
    return (
      <Modal.Footer>
        <Button onClick = {this.closeModal.bind(this)}>Cancel</Button>
        <Button bsStyle="primary" onClick = {this.onAdd.bind(this)}>Add</Button>
      </Modal.Footer>
    )
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
                return <ColumnFormGroup initialValue = {this.props.initial && this.props.initial[column.name]} key = {column.name} column = {column} onChange = {(value) => {
                    this.setState({
                      [column.name]: value
                    })
                  }}
                />
              })
            }
          </Modal.Body>

          {this.props.initial ? this.editFooter() : this.addFooter()}

      </Modal.Dialog>)
  }
}

export default connect()(CustomModal)
