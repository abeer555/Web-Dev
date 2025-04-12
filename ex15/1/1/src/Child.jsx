import React from 'react';
import PropTypes from 'prop-types';

function Child({ message }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>{message}</p>
    </div>
  );
}

Child.propTypes = {
  message: PropTypes.string.isRequired
};

export default Child;