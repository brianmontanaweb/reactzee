import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Hint } from '../hint/Hint';

class Dice extends Component {

  render() {
    //This seems bloated, wonder about updating it
    let diceSvg = value => {
      if (value === 1) {
        return (
          <g>
            <circle r="2" cx="16" cy="16">

            </circle>
          </g>
        )
      }
      if (value === 2) {
        return (
          <g>
            <circle r="2" cx="8" cy="8">

            </circle>
            <circle r="2" cx="24" cy="24">

            </circle>
          </g>
        )
      }
      if (value === 3) {
        return (
          <g>
            <circle r="2" cx="8" cy="8">

            </circle>
            <circle r="2" cx="16" cy="16">

            </circle>
            <circle r="2" cx="16" cy="16">

            </circle>
            <circle r="2" cx="24" cy="24">

            </circle>
          </g>
        )
      }
      if (value === 4) {
        return (
          <g>
            <circle r="2" cx="8" cy="8">

            </circle>
            <circle r="2" cx="24" cy="24">

            </circle>
            <circle r="2" cx="24" cy="8">

            </circle>
            <circle r="2" cx="8" cy="24">

            </circle>
          </g>
        )
      }
      if (value === 5) {
        return (
          <g>
            <circle r="2" cx="8" cy="8">

            </circle>
            <circle r="2" cx="16" cy="16">

            </circle>
            <circle r="2" cx="16" cy="16">

            </circle>
            <circle r="2" cx="24" cy="24">

            </circle>
            <circle r="2" cx="24" cy="8">

            </circle>
            <circle r="2" cx="8" cy="24">

            </circle>
          </g>
        )
      }
      if (value === 6) {
        return (
          <g>
            <circle r="2" cx="8" cy="8">

            </circle>
            <circle r="2" cx="24" cy="24">

            </circle>
            <circle r="2" cx="24" cy="8">

            </circle>
            <circle r="2" cx="8" cy="24">

            </circle>
            <circle r="2" cx="8" cy="16">

            </circle>
            <circle r="2" cx="24" cy="16">

            </circle>
          </g>
        )
      }
    };
    return (
      <div className="dice__container">

        <div className={`dice__component dice-count`}>
          <span className="srt">{this.props.diceValue}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            {diceSvg(this.props.diceValue)}
          </svg>
        </div>

        <Hint hintContent={this.props.goalHint} />

      </div>
    )
  }
}

export default Dice;