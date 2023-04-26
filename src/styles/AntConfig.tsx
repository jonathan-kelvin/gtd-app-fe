import React from 'react';
import { ConfigProvider } from 'antd';
import {
  COLOR_BG_BASE,
  COLOR_ERROR,
  COLOR_INFO,
  COLOR_PRIMARY,
  COLOR_SUCCESS,
  COLOR_TEXT_BASE,
  COLOR_WARNING,
} from './colors';

type AntConfig = {
  children: React.ReactNode;
};

const AntConfig: React.FC<AntConfig> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: COLOR_BG_BASE,
          colorError: COLOR_ERROR,
          colorInfo: COLOR_INFO,
          colorPrimary: COLOR_PRIMARY,
          colorSuccess: COLOR_SUCCESS,
          colorTextBase: COLOR_TEXT_BASE,
          colorWarning: COLOR_WARNING,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntConfig;
