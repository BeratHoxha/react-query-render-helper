// Vendor
import { memo } from 'react';
import { Spin } from 'antd';

const Loader = props => (
  <Spin
    spinning
    size="large"
    {...props}
  />
);

export default memo(Loader);
