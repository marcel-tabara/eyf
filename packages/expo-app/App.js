import * as React from 'react';
import { StyleSheet } from 'react-native';
import store from '@recipes/redux-store';
import { Provider } from 'react-redux';
import MainStackNavigator from './navigation';

const template_store = store();

console.log('########## store', template_store.getState());

export default function App() {
  return (
    <Provider store={template_store}>
      <MainStackNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
