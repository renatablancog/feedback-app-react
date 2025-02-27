import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false,
}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children} {/**children is the text inside the btn */}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
