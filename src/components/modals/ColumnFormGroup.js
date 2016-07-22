import React from 'react'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

const ColumnFormGroup = ({column, onChange}) => {
  return (
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>{column.name}</ControlLabel>
      <FormControl componentClass="select" placeholder="select" onChange = {
          (e) => {
            onChange(e.nativeEvent.target.value);
          }
        }>
        {
          (column.options.map((option) => {
            return <option key = {option} value={option}>{option}</option>
          }))
        }
      </FormControl>
    </FormGroup>
  )
}

export default ColumnFormGroup
