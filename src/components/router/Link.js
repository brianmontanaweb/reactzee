import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Link extends Component {
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  };

  handleClick = (event) => {
    event.preventDefault();
    this.context.linkHandler(this.props.to);
  };

  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : '';
    return <a href="filter" className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
};