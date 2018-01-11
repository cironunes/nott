import React, { PureComponent } from 'react';
import './NotFound.css';

class NotFound extends PureComponent {
  render = () => (
    <div className="page page-not-found">
      <div className="page__content page-not-found__content u-fx  u-fx-align-center u-fx-justify-center">
        <p>Ups! 404 Not Found.</p>
      </div>
    </div>
  );
}

export default NotFound;
