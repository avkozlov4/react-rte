/* @flow */

import React, {Component} from 'react';
import IconButton from './IconButton';
import autobind from 'class-autobind';
import cx from 'classnames';

import styles from './FileButton.css';

type Props = {
  iconName: string;
  onSelect: Function;
};

export default class FileButton extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let className = cx(styles.root);
    let {...props} = this.props; // eslint-disable-line no-unused-vars
    return (
      <label htmlFor="file-button" className={className} >
        <IconButton noButton={true} {...props} />
        <input type="file" id="file-button" onChange={this._onSelect} />
      </label>
    );
  }

  _onSelect(e) {
    const file = e.target.files[0] || '';
    let { request, onSelect } = this.props;

    if (request) {
      request(file, onSelect);
    }
  }
}
