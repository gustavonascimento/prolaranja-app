import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import API from '../services/api'

const fetch = new API()

// Store
export const clientsStore = createSlice({
  name: 'clientsStore',
  initialState: {
    clients: [],
    fechingData: false
  },
  reducers: {
    setFechingData: (state, action) => {
      state.fechingData = action.payload
    },
    addClients: (state, action) => {
      state.clients = _.concat(state.clients, action.payload)
    }
  }
})

// Reducers
export const { addClients, setFechingData } = clientsStore.actions

// Actions
export const fetchClients = () => async dispatch => {
  try {
    dispatch(setFechingData(true))
    const result = await fetch.get('clients')
    dispatch(setFechingData(false))
  } catch (error) {
    dispatch(setFechingData(false))
    console.log(error)
  }
}

// Selectors
export const selectClients = state => state.clientsStore.clients
export const selectFechingClients = state => state.clientsStore.fechingData

export default clientsStore.reducer
