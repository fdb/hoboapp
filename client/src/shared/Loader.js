import React from 'react';
import classNames from 'classnames';
import spinner from './spinner.svg';
import './Loader.css';

export default class Loader extends React.Component {
  render() {
    const { fullscreen } = this.props;
    const loaderClass = classNames('loader', { fullscreen });
    return (
      <div className={loaderClass}>
        <img className="loader__image" src={spinner} alt="Loading...." />
      </div>
    );
  }
}
