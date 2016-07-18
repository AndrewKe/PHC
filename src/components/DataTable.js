import React, {Component} from 'react'
import TableCell from './TableCell.js'
import DataTableHeader from './DataTableHeader.js'
import {Table} from 'react-bootstrap'

export default class DataTable extends Component {
  constructor(){
    super()
    this.state = {
      selectedRow : -1
    }
  }

  render() {
    const rows = this.props.rows.map((row, rowIndex) => {
      const cells = this.props.columns.map((column, columnIndex) => {
        return <TableCell
          key = {columnIndex}
          editing = {rowIndex == this.state.selectedRow}
          value = {row[column.name]}/>
      })
      return (
        <tr key = {rowIndex}>
          {cells}
        </tr>
      )
    })

    return (
      <div>
        <h1>{this.props.name}</h1>
        <Table striped bordered>
          <DataTableHeader columns = {this.props.columns}/>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    )
  }
}
