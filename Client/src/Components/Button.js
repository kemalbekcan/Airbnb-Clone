import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import buttons from '../Utils/Buttons';

export default function Button({ id }) {
  function onClick() {
    console.log('tiklandi');
  }
  return (
    <Fragment>
      {buttons &&
        buttons
          .filter((value) => value.id == id)
          .map((filterButton) => {
            return (
              <button key={filterButton.id} onClick={onClick}>
                {filterButton.name}
              </button>
            );
          })}
    </Fragment>
  );
}

Button.propTypes = {
  id: PropTypes.number,
};
