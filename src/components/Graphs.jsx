import React, { PropTypes } from 'react'
import {Chart} from 'react-google-charts'

var data = [
  ['Category', 'a: Below HHD(<15)', 'b:HHD min - MKT min(15-29.9)',
  'c:MKT level(30-59.9)', 'd:above MKT(>=60)'],
  ['2010 Q3', 10, 24, 20, 32],
  ['2010 Q4', 16, 22, 23, 30],
  ['2011 Q1', 28, 19, 29, 30],
  ['2011 Q2', 10, 24, 20, 32],
  ['2011 Q3', 16, 22, 23, 30],
  ['2011 Q4', 28, 19, 29, 30],
  ['2012 Q1', 10, 24, 20, 32],
  ['2012 Q2', 16, 22, 23, 30],
  ['2012 Q3', 28, 19, 29, 30]
]

var colOptions = {
  title: 'Import Control: Evolution of Fortification Levels of Salt',
  width: 1000,
  height: 400,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: 'percent',
}

class Graphs extends React.Component {
  render () {
    return <div className={"phc-chart-container"}>
      <Chart chartType = "ColumnChart" data = {data} options = {colOptions}
        graph_id = "ScatterChart"
        legend_toggle={true} />
    </div>
  }
}

export default Graphs;
