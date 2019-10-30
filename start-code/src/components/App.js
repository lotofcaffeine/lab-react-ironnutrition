import React from "react";
import DataHandler from "./DataHandler";
import SearchBar from "./SearchBar";
import Card from "./Card";

class App extends React.Component {
  api = new DataHandler();
  state = { data: this.api.values() };

  onSearchSubmit = term => {
    this.setState({ data: this.api.searchBy(term) });
    this.listCards();
  };

  listCards = () => {
    this.state.data.map((item, i) => <Card />);
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
                  {this.state.data.map((item, i) => (
                    <Card
                      key={i}
                      image={item.image}
                      title={item.name}
                      subtitle={item.calories}
                    />
                  ))}
                </div>
                <div className="column">
                  <p className="title">Today's food</p>
                  <ul>
                    <li>2 Hamburger = 800 </li>
                    <li>2 Hamburger = 800 </li>
                  </ul>
                  <p className="subtitle">Total: 1600 cal</p>
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
