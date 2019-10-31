import React, { Component } from "react";

class Form extends Component {
  state = { name: "", calories: 0, url: "https://i.imgur.com/eTmWoAN.png" };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleCalories = e => {
    this.setState({ calories: e.target.value });
  };

  handleUrl = e => {
    this.setState({ url: e.target.value });
  };
  print = e => {
    console.log(e.target);
  };

  handleSubmit = e => {
    e.preventDefault();
    let item = this.state;
    this.props.addToApp(item);
  };

  addOthersFoodToApp = e => {};
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add new item</p>
            <button
              onClick={this.props.toggleModal}
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <form action="" onSubmit={this.handleSubmit}>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g sushi"
                    value={this.state.name}
                    onChange={this.handleName}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="300"
                    value={this.state.calories}
                    onChange={this.handleCalories}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">URL</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g https://i.imgur.com/eTmWoAN.png"
                    value={this.state.url}
                    onChange={this.handleUrl}
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={this.addOthersFoodToApp}
              >
                Submit
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
