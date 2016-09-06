import React, {Component} from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { showModal } from '../actions/modal'

const styles = {
  addDataBtn: {
    marginTop: "0.5em",
    verticalAlign: "middle"
  }
}

const AddDataButton = (props) => {
  return (<ButtonGroup style={styles.addDataBtn}><Button bsStyle="danger" onClick = {() => {
      props.dispatch(showModal('ADD_DATA', props.modalProps))
  }}>Add Data</Button></ButtonGroup>)
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
