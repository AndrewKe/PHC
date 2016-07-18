export function showModal(type, props){
  return {
    type: 'SHOW_MODAL',
    modalType: type,
    modalProps: props
  }
}

export function closeModal(){
  return {
    type: 'HIDE_MODAL',
  }
}
