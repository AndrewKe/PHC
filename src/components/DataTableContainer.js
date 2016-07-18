import React, {Component} from 'react'
import DataTable from './DataTable.js'
import { connect } from 'react-redux'
import {updateDoc} from '../actions'

const mapStateToProps = (state) => {
  return {
    name: state.selectedTable,
    rows: state.tableContent.rows,
    columns: state.tableContent.columns
  }
}

const DataTableContainer = connect(
  mapStateToProps
)(DataTable)

export default DataTableContainer
