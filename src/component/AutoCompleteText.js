import React, { Component } from "react";
import "./AutoCompleteText.css";
class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.items = ["ali", "shadi", "nader", "mohamad", "mehran"];
  }
  state = {
    suggestion: [],
    text: ""
  };

  onchangeHandler = event => {
    const value = event.target.value;
    let suggestion = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestion = this.items.sort().filter(v => regex.test(v));
    }

    this.setState(() => ({ suggestion, text: value }));
  };

  renderSuggestion() {
    const { suggestion } = this.state;

    if (suggestion.length === 0) {
      return null;
    } else {
      return (
        <ul>
          {suggestion.map(item => (
            <li key="" onClick={() => this.suggestionSelected(item)}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }
  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestion: []
    }));
  }

  render() {
    const { text } = this.state;
    return (
      <div className="AutoCompleteText">
        <input
          value={text}
          onChange={this.onchangeHandler}
          type="text"
          placeholder="search
        "
        />
        {this.renderSuggestion()}
      </div>
    );
  }
}

export default AutoCompleteText;
