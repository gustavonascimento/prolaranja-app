import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clientsStore from '../reducers/clients'

export default configureStore({
  reducer: {
    counter: counterReducer,
    clientsStore
  },
});
