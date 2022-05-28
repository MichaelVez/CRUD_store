import React, { Component } from "react";
import img from "../Assets/imgg.jpg";
export default class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <h1>Michael's Store - Climbing shoes </h1>
        <img id='climb' src={img} alt='' />
        <div></div>
      </div>
    );
  }
}
