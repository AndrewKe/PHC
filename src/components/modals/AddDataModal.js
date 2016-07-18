import React, {Component} from 'react'
import { Modal , Button} from 'react-bootstrap'
import ColumnFormGroup from './ColumnFormGroup.js'

class AddDataModal extends Component {
  constructor(){
    super()
    this.state = {}
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
                return <ColumnFormGroup column = {column} onChange = {(value) => {
                    this.setState({
                      column: value
                    })
                  }}/>
              })
            }
          </Modal.Body>

          <Modal.Footer>
            <Button onClick = {this.props.onClose}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

      </Modal.Dialog>)
  }
}

export default AddDataModal
