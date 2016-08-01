import React, {Component} from 'react'
import CustomModal from './CustomModal'
import {updateRow, deleteRow} from '../../actions/'
import {connect} from 'react-redux'

class EditDataModal extends Component {
  render() {
    return <CustomModal
      columns = {this.props.columns}
      initial = {this.props.row}
      onSave = {(newData) => {
        this.props.dispatch(updateRow(Object.assign(this.props.row, newData)))
      }}
      onDelete = {() => this.props.dispatch(deleteRow(this.props.row))}
    />
  }
}

export default connect()(EditDataModal)
