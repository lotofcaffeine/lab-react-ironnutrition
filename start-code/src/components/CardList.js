import React, { Component } from "react";
import Card from "./Card";
import "./CardList.css";

class CardList extends Component {
  render() {
    const cards = this.props.array.map((item, i) => (
      <Card
        key={i}
        item={item}
        add={this.props.add}
        deleteFromApp={this.props.deleteFromApp}
      />
    ));
    return cards;
  }
}

export default CardList;
