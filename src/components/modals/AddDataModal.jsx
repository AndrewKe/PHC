import React, {Component} from 'react'
import CustomModal from './CustomModal'
import {addRow} from '../../actions/'
import {connect} from 'react-redux'

class AddDataModal extends Component {
  render() {
    return <CustomModal
      columns = {this.props.columns}
      onAdd = {(newData) => {
        console.log(newData);
        this.props.dispatch(addRow(newData))
      }}
    />
  }
}

export default connect()(AddDataModal)
