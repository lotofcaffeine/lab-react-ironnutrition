import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };

  onInputChange = e => {
    // this.setState({ term: e.target.value });
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.onFormSubmit} className="" action="">
          <div className="field">
            <input
              className="input"
              type="text"
              value={this.props.term}
              onChange={this.onInputChange}
              placeholder={this.props.placeholder}
            />
          </div>
        </form>
      </div>
    );
  }
}

//onClick
//onChange
//onSubmit

export default SearchBar;
