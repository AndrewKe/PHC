import React from 'react'
import TableSelectorContainer from './TableSelectorContainer'
import DataTableContainer from './DataTableContainer'
import AddDataButton from './AddDataButton'
import ModalRoot from './ModalRoot'
const App = (props) => {
  return (
    <div>
      <ModalRoot/>
      <AddDataButton/>
      <TableSelectorContainer/>
      <DataTableContainer/>
    </div>
  )
}

export default App
