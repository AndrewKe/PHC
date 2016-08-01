import React, {Component} from 'react'

export default class TableCell extends Component {
  render() {
    return <td>{this.props.value}</td>
  }
}
