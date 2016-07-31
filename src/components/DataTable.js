import React, {Component} from 'react'
import TableCell from './TableCell.js'
import DataTableHeader from './DataTableHeader.js'
import {Table} from 'react-bootstrap'
import { showModal } from '../actions/modal'

export default class DataTable extends Component {

  constructor(){
    super()
  }

  rowClicked(row) {
    console.log("Row: " + JSON.stringify(row));
    this.props.dispatch(showModal('EDIT_DATA', {
      columns: this.props.columns,
      row: row
    }))
  }

  render() {
    const rows = this.props.rows.map((row, rowIndex) => {
      const cells = this.props.columns.map((column, columnIndex) => {
        return <TableCell
          key = {columnIndex}
          value = {row[column.name]}/>
      })
      return (
        <tr key = {rowIndex} onClick = {() => this.rowClicked(row)}>
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
