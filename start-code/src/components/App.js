import React from "react";
import DataHandler from "../api/DataHandler";
import FoodsHandler from "../api/FoodsHandler";
import SearchBar from "./SearchBar";
import Form from "./Form";
import CardList from "./CardList";
import FoodList from "./FoodList";
import logo from "../logo.svg";

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
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <img src={logo} style={{ height: "10vmin" }} alt="logo" />
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">LinusNutrition</a>
              <a className="navbar-item">LinusCountries</a>
              <a className="navbar-item">LinusBeers</a>
              <a className="navbar-item">TodoList</a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="navbar-item">Register</a>
                  </p>
                  <p className="control">
                    <a className="navbar-item">Login</a>
                  </p>
                  <p className="control">
                    <a className="navbar-item">Settings</a>
                  </p>
                  <p className="control">
                    <a className="navbar-item">Logout</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <h1 className="title">LinusNutrition</h1>
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
