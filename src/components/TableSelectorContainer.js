import React, {Component} from 'react'
import { connect } from 'react-redux'
import {selectTable} from '../actions'

const TableSelector = (props) => {
  return (
    <div>
      <span>Select Table: </span>
      <select name="select" onChange={(event) => {props.selectTable(event.target.value)}}>
        {props.options.map((option) =>  <option key = {option._id}>{option._id}</option>)}
      </select>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    options: state.meta.tables
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    selectTable: (table) => {dispatch(selectTable(table))}
  }
}

const TableSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableSelector)


export default TableSelectorContainer
