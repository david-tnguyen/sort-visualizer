import React from 'react';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="app">
        <nav className="nav">
          <ul className="nav__menu">
            <li
              className="nav__menu-item"
              onClick={() => console.log('clicked')}
            >
              <a>Sorting Algorithms</a>
              <Submenu />
            </li>
            <li className="nav__menu-item">
              <a>Speed</a>
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
      <ul className="nav__submenu open" onClick={() => console.log('clicked')}>
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

export default Header;
