import React from 'react';
import {Routes} from './src/Routes';
import {AuthProviders} from './src/components';

export default function App() {
  return (
    <AuthProviders>
      <Routes />
    </AuthProviders>
  );
}
