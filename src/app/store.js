import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clientsStore from '../reducers/clients'
import alertStore from '../reducers/alert'

export default configureStore({
  reducer: {
    counter: counterReducer,
    clientsStore,
    alertStore
  },
});
