import React, {Component} from 'react'
import { connect } from 'react-redux'
import {selectTable} from '../actions'
import AddDataButton from './AddDataButton'
import {Grid} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

const styles = {
  button1: {
    width: 20
  },
  button2: {
    width: 30
  }
}

const TableSelector = (props) => {
  return (
    <div style = {styles.button1}>
    <Grid>
      <Row>
        <Col xs={6} md={2}>
          <span>Select Staple: </span>
          <select name="select" onChange={(event) => {props.selectTable(event.target.value)}}>
            {props.options.map((option) =>  <option key = {option._id}>{option._id}</option>)}
          </select>
        </Col>
        <Col xs={6} md={2}>
          <AddDataButton/>
        </Col>
      </Row>
    </Grid>
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
