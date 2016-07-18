import React from 'react'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

const ColumnFormGroup = ({column}) => {
  return (
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>{column.name}</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        {
          (column.options.map((option) => {
            return <option value="select">{option}</option>
          }))
        }
      </FormControl>
    </FormGroup>
  )
}

export default ColumnFormGroup
