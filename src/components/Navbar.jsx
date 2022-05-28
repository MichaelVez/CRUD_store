import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link className='navbar-link' to='/'>
          Home
        </Link>
        <Link className='navbar-link' to='/store'>
          Store
        </Link>
        <Link className='navbar-link' to='/videos'>
          Videos
        </Link>
      </div>
    );
  }
}
