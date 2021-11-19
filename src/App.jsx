import React, { Component } from "react";
import { connect } from "react-redux";
import {
  calculate,
  deleteLastEntry,
  clear,
  evaluateExpression,
  square,
  squareRoot
} from "./store/actions/calculate";
import Calculator from "./components/calculator";
import * as fromCalculator from "./store";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import LightDark from "./components/light-dark-toggle/LightDark";

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {mode: true};
  }

  componentDidMount() {
    console.log("mounted calculator!");
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container align-center">
          <div className="container-column-6">
            <Hero />
          </div>
          <div className="container-column-3">
            <div className={ this.state.mode ? 'calculator--container light' : 'calculator--container dark'}>
              <div onClick={() => {
                this.setState({
                  mode: !this.state.mode
                });
              }}>
                <LightDark mode={this.state.mode} />
              </div>
              <Calculator.Screen {...this.props} />
              <Calculator.Keypad {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    },
    square: () => {
      dispatch(square());
    },
    squareRoot: () => {
      dispatch(squareRoot());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
