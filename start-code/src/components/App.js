import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

class App extends React.Component {
  onSearchSubmit = term => {
    console.log(term);
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
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
                </div>
                <div className="column">
                  <p className="title">Today's food</p>
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
