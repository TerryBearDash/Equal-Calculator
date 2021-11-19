import React, { Component } from "react";
import { keypadKeys } from "../../utils/constants";
import Calculator from ".";
export default class Keypad extends Component {
  handleClick = key => {
    switch (key) {
      case "c":
        this.props.clear();
        break;
      case "Del":
        this.props.delete();
        break;
      case "=":
        this.props.evaluate();
      default:
        this.props.calculate(key);
        break;
    }
  };
  render() {
    return (
      <div className="keypad">
        {keypadKeys.map((block, index) => {
          return (
            block.map(key => (
            <Calculator.Button
                key={key}
                onButtonClick={this.handleClick}
                buttonKey={key}
              />
            ))
          );
        })}
      </div>
    );
  }
}
