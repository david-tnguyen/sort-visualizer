import React, { Fragment } from 'react';
import './App.scss';
import Header from '../Header';
import TutorialModal from '../TutorialModal';
import Chart from '../Chart';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <TutorialModal /> */}
        <Header />
        <Chart />
      </React.Fragment>
    )
  }
}

export default App;
