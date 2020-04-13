import React, { Component } from "react";

export default class header extends Component {
  constructor() {
    super();
    this.state = {
      dropdownView: false,
    };
  }
  handleToggle = () => {
    this.setState({ dropdownView: !this.state.dropdownView });
  };
  render() {
    return (
      <div className="header fixed-top">
        <a class="navbar-brand" href="#page-top">
          Start Bootstrap
        </a>
        <div className="dropdown-button" onClick={this.handleToggle}>
          Menu
        </div>
        {this.state.dropdownView ? (
          <nav className="dropdown-menu">
            <span className="nav-link ">services</span>
            <span className="nav-link ">portfolio</span>
            <span className="nav-link ">about</span>
            <span className="nav-link ">contact</span>
          </nav>
        ) : null}
        <nav className="desktop-links">
          <span className="nav-link ">services</span>
          <span className="nav-link ">portfolio</span>
          <span className="nav-link ">about</span>
          <span className="nav-link ">contact</span>
        </nav>
      </div>
    );
  }
}
