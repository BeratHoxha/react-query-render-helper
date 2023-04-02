// Vendor
import { memo } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

const Loader = props => {
  const style = props.withPadding ? {
    display: 'block',
    textAlign: 'center',
    padding: '10rem'
  } : {};

  return (
    <Spin
      spinning
      size="large"
      {...props}
      style={{ ...style, ...props.style }}
    />
  );
}

Loader.propTypes = {
  withPadding: PropTypes.bool,
  style: PropTypes.object,
};

Loader.defaultProps = {
  withPadding: false,
  style: {},
};

export default memo(Loader);
