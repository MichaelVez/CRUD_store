import React, { Component } from "react";
import "./Popup.css";
export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      price: "",
      id: "",
    };
  }
  componentDidMount() {
    if (this.props.edit) {
      this.setState({
        id: this.props.id,
        name: this.props.name,
        img: this.props.img,
        price: this.props.price,
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div className='popup-bg'>
        <div className='popup'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor='img'>Image</label>
          <input
            type='url'
            id='img'
            value={this.state.img}
            onChange={this.handleChange}
          />
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id='price'
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button
            onChange={this.handleChange}
            onClick={() => {
              this.props.handleAddItem(
                this.state.name,
                this.state.img,
                this.state.price,
                this.state.id
              );
            }}
          >
            Add
          </button>
          <button onChange={this.handleChange} onClick={this.props.closeMenu}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
