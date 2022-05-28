import React, { Component } from "react";
import "./Card.css";
export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <div>{this.props.cardName}</div>
        <img src={this.props.cardImg} alt='bad-src' />
        <div>Price: {this.props.cardPrice}$</div>
        <div>
          <button
            onClick={() => {
              this.props.handleEdit(
                this.props.cardName,
                this.props.id,
                this.props.cardImg,
                this.props.cardPrice
              );
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.props.handleDelete(this.props.cardName, this.props.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
