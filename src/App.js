import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <header className="app">
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <a>Speed</a>
            </li>
            <li
              className="nav__menu-item"
            >
              <a>Sorting Algorithms</a>
              <Submenu />
            </li>
            <li className="nav__menu-item">
              <a>Size</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Bubble</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Quick</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Merge</a>
        </li>
      </ul>
    )
  }
}

export default App;
