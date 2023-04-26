import React from 'react';
import { ConfigProvider, theme } from 'antd';

type AntConfig = {
  children: React.ReactNode;
};

const AntConfig: React.FC<AntConfig> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntConfig;
