/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {Text} from 'react-native';

import {Card} from '@jennysharps/mobile-components';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Text>Hello</Text>
      <Text>Card:</Text>
      {JSON.stringify(Card)}
    </PaperProvider>
  );
};

export default App;
