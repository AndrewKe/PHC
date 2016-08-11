import React from 'react'
import TableSelectorContainer from './TableSelectorContainer'
import DataTableContainer from './DataTableContainer'
import AddDataButton from './AddDataButton'
import ModalRoot from './ModalRoot'
import Login from './Login'

const App = (props) => {
  return (
    <div>
      <ModalRoot/>
      <TableSelectorContainer/>
      <DataTableContainer/>
    </div>
  )
}

export default App
