import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoReducers from './store/actions/reducers/todoReducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Main from './containers/main';

const rootReducers = combineReducers({
  todo: TodoReducers
})

const store = createStore(rootReducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
