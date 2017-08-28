import React from 'react';
import PropTypes from 'prop-types';

class Total extends React.Component {
  render() {
    return (
      <div>
        {this.props.totalValue}
      </div>
    )
  }
}

Total.propTypes = {
  totalValue: PropTypes.number,
};

export default Total;