import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet  } from 'react-native';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './redux/store';
import ClientRouters from './ClientRouters';
import {NativeRouter} from 'react-router-native';

export default function App() {



  return (
    <NativeRouter>
      <Provider store={store}> 
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Header />
          <ClientRouters />
        </SafeAreaView>
      </Provider>
    </NativeRouter>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#557',
  },
});
