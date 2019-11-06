import React from 'react';
import './tutorialModal.scss';

export default class TutorialModal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="modalWrapper">
        <div className="pageCounter">1/4</div>
        <h2>Welcome to Sort Visualizer</h2>
        <h6>This tutorial will show you how to navigate and use all the features of this application.</h6>
        <p>Feel free to click "Skip Tutorial" if you want to head straight to the visualizer.</p>
        <footer className="modalFooter">
          <button>Skip Tutorial</button>
          <button>Previous</button>
          <button>Next</button>
        </footer>
      </div>
    )
  }
}