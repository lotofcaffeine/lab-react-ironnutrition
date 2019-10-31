import React, { Component } from "react";

class FoodItem extends Component {
  deleteFromMyFood = () => {
    this.props.deleteFromMyFood(this.props.item);
  };
  render() {
    const { name, calories, value } = this.props.item;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <p>
              <strong>{value}</strong>
              <small> X</small>
            </p>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <small>{name}</small>
                <small>({calories} cal) = </small>
                <small>{Number(calories) * Number(value)} cal </small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <button
              className="button "
              style={{ marginLeft: "20px" }}
              onClick={this.deleteFromMyFood}
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodItem;
