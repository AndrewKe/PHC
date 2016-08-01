// These are regular React components we will write soon
import React from 'react'
import AddDataModal from './modals/AddDataModal'
import EditDataModal from './modals/EditDataModal'
import {connect} from 'react-redux'

const MODAL_COMPONENTS = {
  'ADD_DATA': AddDataModal,
  "EDIT_DATA": EditDataModal
}

const ModalRoot = ({ modalType, modalProps, dispatch }) => {
  if (!modalType) {
    return <span /> // after React v15 you can return null here
  }

  console.log("Launching modal!");
  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps}/>
}

export default connect(
  state => state.modal
)(ModalRoot)
