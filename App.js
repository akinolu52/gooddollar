import { COLORS } from '@constants';
import BackUp from '@screens/back-up';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, useColorScheme
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ height: '100%' }}>
        <Container isDarkMode>

          <BackUp />

        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const Container = styled.View`
backgroundColor: ${COLORS.WHITE};
  paddingHorizontal: 16px;
  flex: 1;
  marginBottom: 10px;
`;


export default App;
