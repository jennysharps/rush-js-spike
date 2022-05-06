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
import {Text, SafeAreaView} from 'react-native';

import {Card, version} from '@jennysharps/mobile-components';

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
      <SafeAreaView>
        <Card title="Card Title">
          <Text>{`Card content from mobile-components version ${version()}`}</Text>
        </Card>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
