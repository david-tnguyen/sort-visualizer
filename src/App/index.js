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
      </React.Fragment>
    )
  }
}

export default App;
