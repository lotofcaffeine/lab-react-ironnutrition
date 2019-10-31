import React from "react";
import DataHandler from "../api/DataHandler";
import FoodsHandler from "../api/FoodsHandler";
import SearchBar from "./SearchBar";
import Form from "./Form";
import CardList from "./CardList";
import FoodList from "./FoodList";
class App extends React.Component {
  api = new DataHandler();
  foodApi = new FoodsHandler();

  state = {
    data: this.api.values(),
    myFood: this.foodApi.values(),
    showModal: false,
    term: ""
  };

  deleteFromApp = item => {
    this.api.delete(item);
    this.setState({ data: this.api.values() });
  };
  addToMyFood = item => {
    this.foodApi.addFood(item);
    this.setState({ myFood: this.foodApi.values() });
  };

  addToApp = item => {
    this.api.addFood(item);
    this.setState({ data: this.api.values(), showModal: false });
  };

  deleteFromMyFood = item => {
    this.foodApi.delete(item);
    this.setState({ myFood: this.foodApi.values() });
  };
  onSearchSubmit = term => {
    this.setState({ data: this.api.searchBy(term), term: term });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <section className="section ">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <SearchBar
            term={this.state.term}
            onSearch={this.onSearchSubmit}
            placeholder="Search your food"
          ></SearchBar>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <CardList
                    array={this.state.data}
                    add={this.addToMyFood}
                    deleteFromApp={this.deleteFromApp}
                  ></CardList>
                </div>
                <div className="column">
                  <div>
                    <FoodList
                      array={this.state.myFood}
                      deleteFromMyFood={this.deleteFromMyFood}
                    ></FoodList>
                  </div>
                  <button onClick={this.toggleModal}> Add</button>
                  {this.state.showModal && (
                    <Form
                      toggleModal={this.toggleModal}
                      addToApp={this.addToApp}
                    />
                  )}
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
