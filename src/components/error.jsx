// Vendor
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Result } from 'antd';

const Error = props => (
  <Result status="error" title={props.errorTitle} subTitle={props.errorMessage} />
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
