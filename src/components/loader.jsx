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
      style={{ ...style, ...props.style }}
      className={className}
    />
  );
}

Loader.propTypes = {
  withPadding: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

Loader.defaultProps = {
  style: {},
  withPadding: false,
  className: undefined,
};

export default memo(Loader);
