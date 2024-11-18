import React from 'react';
import { QRCode, Space } from 'antd';
const QRCoding = () => (
  <Space>
    <QRCode size={192} type="canvas" value="https://ant.design/" />
  </Space>
);
export default QRCoding;