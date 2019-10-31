import React, { Component } from "react";
import FoodItem from "./FoodItem";

class FoodList extends Component {
  isEmpty = () => {
    return this.props.array.length === 0;
  };

  sumTotal = () => {
    let total = this.props.array.reduce((amount, item) => {
      amount += Number(item.value) * Number(item.calories);
      return amount;
    }, 0);
    return total;
  };
  render() {
    return (
      <div className="column is-fourth-fifths is-offset-one-fifth">
        <p className="title has-text-centered">Today's food</p>
        {this.props.array.map((item, i) => (
          <FoodItem
            key={i}
            item={item}
            deleteFromMyFood={this.props.deleteFromMyFood}
          ></FoodItem>
        ))}
        {this.isEmpty() ? (
          <p
            className="subtitle has-text-centered"
            style={{ marginTop: "10px" }}
          >
            Start to count calories!
          </p>
        ) : (
          <p className="subtitle has-text-centered">
            Total:
            {this.sumTotal()}
            cal
          </p>
        )}
      </div>
    );
  }
}

export default FoodList;
