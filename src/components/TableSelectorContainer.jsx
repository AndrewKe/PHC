import React, {Component} from 'react'
import { connect } from 'react-redux'
import {selectTable} from '../actions'
import AddDataButton from './AddDataButton'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

const styles = {
  flexHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  addDataBtn: {
    backgroundColor: "#444444"
  }
}

const TableSelector = (props) => {
  return (
    <Navbar>
      <Nav>
        <NavDropdown title="Select Staple" id="basic-nav-dropdown" onSelect={(eventKey) => props.selectTable(eventKey)}>
          {props.options.map((option) =>  <MenuItem eventKey = {option._id}>{option.name}</MenuItem>)}
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <AddDataButton/>
      </Nav>
    </Navbar>
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
