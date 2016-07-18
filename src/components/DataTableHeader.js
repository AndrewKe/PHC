import React, {Component} from 'react'

export default class DataTableHeader extends Component {
  render() {
    let columns = this.props.columns.map(({name}, index) => {
      return <th key = {index}>{name}</th>
    })

    return (
      <thead>
        <tr>
           {columns}
        </tr>
      </thead>
    )
  }
}
