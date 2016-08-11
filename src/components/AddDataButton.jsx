import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { showModal } from '../actions/modal'


const AddDataButton = (props) => {
  return <Button bsStyle="primary" onClick = {() => {
      props.dispatch(showModal('ADD_DATA', props.modalProps))
  }}>Add Data</Button>
}

function mapStateToProps(state) {
  return {
    modalProps: {
      columns: state.tableContent.columns
    }
  }
}
const container = connect(mapStateToProps)(AddDataButton)

export default container
