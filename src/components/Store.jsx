import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Popup from "./Popup";
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      popUp: false,
      edit: false,
      editName: "",
      editImg: "",
      editPrice: "",
      editID: "",
    };
  }
  componentDidMount = async () => {
    try {
      let { data } = await axios.get(
        "https://628e3595368687f3e71287e0.mockapi.io/myFirstAPI"
      );
      this.setState({ data: data });
    } catch (e) {
      console.log(e);
    }
  };
  crateCards = () => {
    return this.state.data.map((card) => {
      return (
        <Card
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          id={card.id}
          key={card.name}
          cardName={card.name}
          cardImg={card.img}
          cardPrice={card.price}
        />
      );
    });
  };
  handleEdit = (name, id, img, price) => {
    this.setState({ edit: true });
    this.setState({
      editName: name,
      editImg: img,
      editPrice: price,
      editID: id,
    });
    this.handleAdd();
  };
  handleDelete = (name, id) => {
    try {
      axios.delete(
        `https://628e3595368687f3e71287e0.mockapi.io/myFirstAPI/${id}`
      );
    } catch (e) {
      console.log(e);
    }
    this.setState((prevState) => {
      const arrOfObjAfterDelete = prevState.data.filter((card) => {
        return card.name !== name;
      });
      return { data: arrOfObjAfterDelete };
    });
  };
  handleAdd = () => {
    this.setState({ popUp: true });
  };
  closeMenu = () => {
    this.setState({ popUp: false });
  };
  handleAddItem = async (name, img, price, id) => {
    if (this.state.edit) {
      let newobj = { name, img, price, id };
      try {
        await axios.put(
          `https://628e3595368687f3e71287e0.mockapi.io/myFirstAPI/${id}`,
          newobj
        );
        this.componentDidMount();
        this.crateCards();
      } catch (e) {
        console.log(e);
      }
      this.setState({ edit: false });
      this.closeMenu();
    } else {
      let myNewObj = {
        name: name,
        img: img,
        price: parseInt(price),
        id: this.state.data.length.toString(),
      };
      this.setState((prevState) => {
        prevState.data.push(myNewObj);
      });
      try {
        axios.post(
          "https://628e3595368687f3e71287e0.mockapi.io/myFirstAPI",
          myNewObj
        );
      } catch (e) {
        console.log(e);
      }
      this.crateCards();
      this.closeMenu();
    }
  };
  render() {
    return (
      <>
        <button id='addItem' onClick={this.handleAdd}>
          Add item
        </button>
        <div className='storeCont'>
          {this.state.popUp && (
            <Popup
              edit={this.state.edit}
              id={this.state.editID}
              name={this.state.editName}
              img={this.state.editImg}
              price={this.state.editPrice}
              closeMenu={this.closeMenu}
              handleAddItem={this.handleAddItem}
            />
          )}
          {this.crateCards()}
        </div>
      </>
    );
  }
}
