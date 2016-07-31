import React from 'react'
import {FormGroup, ControlLabel, FormControl, Field} from 'react-bootstrap'
import DateTimePicker from 'react-bootstrap-datetimepicker'
import moment from 'moment'

export default class ColumnFormGroup extends React.Component {

  formatTime(time){
    return moment(time, 'x').format("MM/DD/YY")
  }

  getFormControl() {
    const {column, onChange, initialValue} = this.props

    switch(column.inputType) {
      case "select":
        return (
          <FormControl defaultValue = {initialValue} componentClass="select" placeholder="select" onChange = {(e) => {onChange(e.nativeEvent.target.value)}}>
            {
              column.options.map((option) => {
                return <option key = {option} value={option} >{option}</option>
              })
            }
          </FormControl>
        )
      case "date":
        return <DateTimePicker
                  defaultText = {initialValue || ""}
                  mode = "date"
                  inputFormat = "MM/DD/YY"
                  showToday = {true}
                  onChange = {(x) => {onChange(this.formatTime(x))}}/>
      case "text":
        return <FormControl type="text" defaultValue = {initialValue || ''} onChange = {(e) => {onChange(e.nativeEvent.target.value)}}/>

    }
  }

  render() {
    const {column} = this.props
    return (
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>{column.name}</ControlLabel>
        {this.getFormControl()}
      </FormGroup>
    )
  }
}
