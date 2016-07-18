// These are regular React components we will write soon
import React from 'react'
import AddDataModal from './modals/AddDataModal'
import {connect} from 'react-redux'
import {closeModal} from '../actions/modal'

const MODAL_COMPONENTS = {
  'ADD_DATA': AddDataModal,
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span /> // after React v15 you can return null here
  }

  console.log("Launching modal!");
  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} onClose = {() => {
      this.props.dispatch(closeModal())
    }}/>
}

export default connect(
  state => state.modal
)(ModalRoot)
