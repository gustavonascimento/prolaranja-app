import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clientsStore from '../reducers/clients'
import alertStore from '../reducers/alert'
import optionsStore from '../reducers/options'

export default configureStore({
  reducer: {
    counter: counterReducer,
    clientsStore,
    alertStore,
    optionsStore
  },
});
