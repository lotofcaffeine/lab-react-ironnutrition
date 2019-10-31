import React from "react";
import DataHandler from "../api/DataHandler";
import FoodsHandler from "../api/FoodsHandler";
import SearchBar from "./SearchBar";
import Form from "./Form";
import CardList from "./CardList";
class App extends React.Component {
  api = new DataHandler();
  foodApi = new FoodsHandler();

  state = {
    data: this.api.values(),
    myFood: this.foodApi.values(),
    toggleModal: false
  };

  addMyFood = item => {
    console.log(item);
    this.foodApi.addItem(item);
    this.setState({ myFood: this.foodApi.values() });
  };
  onSearchSubmit = term => {
    this.setState({ data: this.api.searchBy(term) });
  };

  toggleModal = () => {
    this.setState({ toggleModal: !this.state.toggleModal });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <SearchBar
            onSearch={this.onSearchSubmit}
            placeholder="Search your food"
          ></SearchBar>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <CardList
                    array={this.state.data}
                    add={this.addMyFood}
                  ></CardList>
                </div>
                <div className="column">
                  <div>
                    <p className="title">Today's food</p>
                    <ul>
                      {this.state.myFood.map((item, i) => {
                        return (
                          <li key={i}>
                            {item.value}({item.name}): {item.value} *{" "}
                            {item.calories} = {item.value * item.calories}cal
                          </li>
                        );
                      })}
                    </ul>
                    <p className="subtitle">Total: 1600 cal</p>
                  </div>
                  <Form />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default App;
