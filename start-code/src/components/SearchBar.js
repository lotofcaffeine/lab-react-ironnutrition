import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.term);
    this.props.onSearch(this.state.term);
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <input
              className="input"
              type="text"
              value={this.state.term}
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
