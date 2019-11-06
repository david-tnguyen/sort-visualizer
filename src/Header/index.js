import React from 'react';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSubmenu: ''
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleOpen() {
    this.setState({
      openSubmenu: 'open'
    })
  }

  handleBlur() {
    this.setState({
      openSubmenu: ''
    })
  }

  render() {
    return (
      <header className="app">
        <nav className="nav">
          <ul className="nav__menu">
            <li
              className="nav__menu-item"
              tabIndex="1"
              onClick={this.handleOpen}
              onBlur={this.handleBlur}
            >
              <a>Sorting Algorithms</a>
              <Submenu openSubmenu={this.state.openSubmenu}/>
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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul
        className={`nav__submenu ${this.props.openSubmenu}`}
      >
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
