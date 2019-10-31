import React, { Component } from "react";

class Form extends Component {
  print = e => {
    console.log(e.target);
  };
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <p className="title">Add new item</p>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g sushi" />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input className="input" type="number" placeholder="300" />
          </div>
        </div>

        <div className="file has-name is-right">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">Choose a file…</span>
            </span>
            <span className="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>
        <div
          className="field is-grouped is-grouped-centered "
          style={{ marginTop: "10px" }}
        >
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
