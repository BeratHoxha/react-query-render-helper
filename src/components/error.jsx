// Vendor
import PropTypes from 'prop-types';
import { memo } from 'react';

const Error = props => (
  <div>
    <h1>{props.errorTitle}</h1>
    <p>{props.errorMessage}</p>
  </div>
);

Error.propTypes = {
  errorTitle: PropTypes.string,
  errorMessage: PropTypes.string,
};

Error.defaultProps = {
  errorTitle: "We're sorry, something went wrong.",
  errorMessage: 'Our team is looking into it.',
};

export default memo(Error);
