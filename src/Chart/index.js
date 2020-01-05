import React from 'react';
import './chart.scss';
import insertionSort from '../InsertionSort';

const data = [2, 22, 10, 42, 4, 15, 10, 32, 25, 46, 40, 4, 12, 14, 24, 20, 35, 40];
const barWidth = 50;
const barPadding = 5;
const barRatio = 7.5;
const maxHeight = Math.max(...data) * barRatio;


export default class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chartWrapper">
        <svg height="650" width="1000">
          {data.map((num, idx) => (
            <g key={idx} transform={`translate(${idx * (barWidth + barPadding)},${maxHeight - (num * barRatio)})`}>
              <rect
                style={{ width: `${barWidth}px`, height: `${num * barRatio}px`}}
                className="rectangle"
              />
              <text x={barWidth / 2} y={num * barRatio + 20} style={{ textAnchor: 'middle' }}>{num}</text>
            </g>
          ))}
        </svg>
      </div>
    )
  }
}