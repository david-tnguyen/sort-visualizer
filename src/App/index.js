import React, { Fragment } from 'react';
import './App.scss';
import Header from '../Header';
import TutorialModal from '../TutorialModal';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <TutorialModal /> */}
        <Header />
        <div style={{ textAlign: 'center', marginTop: '100px'}}>
          <svg style={{ height: '500px'}}>
            <g transform="translate(0,150)">
              <rect style={{ width: '50px', height: '15px', fill: 'yellow'}}/>
              <text x='22.5' y='35' style={{ textAnchor: 'middle' }}>2</text>
            </g>

            <g transform="translate(55)">
              <rect style={{ width: '50px', height: '165px', fill: 'yellow'}}/>
              <text x='22.5' y='185' style={{ textAnchor: 'middle' }}>22</text>
            </g>

            <g transform="translate(110, 90)">
              <rect style={{ width: '50px', height: '75px', fill: 'yellow'}}/>
              <text x='22.5' y='95' style={{ textAnchor: 'middle' }}>10</text>
            </g>
          </svg>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
