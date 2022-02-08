import { Fragment } from 'react';
import Button from './Button';

export default function Cookie() {
  return (
    <Fragment>
      <div className="cookie">
        <div className="cookie-header">
          <h1 className="cookie-header__title">Gizliliğiniz</h1>
        </div>
        <p className="cookie__description"></p>
        <div className="cookie-links">
          <Button id={0} />
          <Button id={1} />
        </div>
      </div>
    </Fragment>
  );
}
