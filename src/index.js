import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { todoReducer, oneTodoReducer, showButtonReducer, clearSelectedReducer } from './reducer/reducerTodo';

//comibine recuder ı başka bir dosyada göster.
const rootReducer = combineReducers({
  todoReducer: todoReducer,
  oneTodoReducer: oneTodoReducer,
  showButtonReducer: showButtonReducer,
  clearSelectedReducer: clearSelectedReducer
})

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);