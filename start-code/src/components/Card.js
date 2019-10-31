import React, { Component } from "react";

class Card extends Component {
  state = { value: 1 };

  addToList = () => {
    let item = { ...this.props.item, value: this.state.value };
    this.props.add(item);
    this.setState({ value: 1 });
  };

  deleteFromApp = () => {
    this.props.deleteFromApp(this.props.item);
  };
  updateQuantity = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { name, calories, image } = this.props.item;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.value}
                  onChange={this.updateQuantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addToList}>
                  +
                </button>
              </div>
              <button
                className="button "
                style={{ marginLeft: "20px" }}
                onClick={this.deleteFromApp}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Card;
