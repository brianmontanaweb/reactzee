import React, { Component } from 'react';
import UpperSection from '../upper-section/UpperSection';
import PropTypes from 'prop-types';

class Scoreboard extends Component {
  render() {

    return (
      <div>
        <UpperSection handleInput={this.props.handleInput}
                      currentGoals={this.props.currentGoals} />
      </div>
    )
  }

  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    currentGoals: PropTypes.object.isRequired,
  };
}

export default Scoreboard;