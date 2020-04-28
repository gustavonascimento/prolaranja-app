import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import API from '../services/api'
import consts from '../consts'

const fetch = new API()

// Store
export const optionsStore = createSlice({
  name: 'optionsStore',
  initialState: {
    products: [],
    routes: [],
    location: [],
    segment: [],
    clientOptions: [],
    isFetchingData: true,
    isFetchingClientOption: false
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload
    },
    setSegment: (state, { payload }) => {
      state.segment = payload
    },
    setRoutes: (state, { payload }) => {
      state.routes = payload
    },
    setClientOptions: (state, { payload }) => {
      state.clientOptions = payload
    },
    setLocation: (state, { payload }) => {
      state.location = payload
    },
    setIsFechingData: (state, { payload }) => {
      state.isFetchingData = payload
    },
    setIsFetchingClientOption: (state, { payload }) => {
      state.isFetchingClientOption = payload
    },
    removeClientOption: (state, { payload }) => {
      _.remove(state.clientOptions, payload)
    },
    addClientOption: (state, { payload = [] }) => {
      state.clientOptions = _.concat(state.clientOptions, payload)
    }
  }
})

// Reducers
export const { 
  setProducts, 
  setIsFechingData,
  setRoutes,
  setLocation,
  setIsFetchingClientOption,
  setClientOptions,
  removeClientOption,
  addClientOption,
  setSegment
} = optionsStore.actions

// Actions
export const fetchOptions = () => async dispatch => {
  try {
    dispatch(setIsFechingData(true))
    const result = await fetch.get(`options`)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(setProducts(result.data.products))
      dispatch(setRoutes(result.data.routes))
      dispatch(setLocation(result.data.location))
      dispatch(setSegment(result.data.segment))
      dispatch(setIsFechingData(false))
    }
  } catch (error) {
    dispatch(setIsFechingData(false))
    console.log(error)
  }
}

export const fetchClientOptions = () => async dispatch => {
  try {
    dispatch(setIsFetchingClientOption(true))
    const result = await fetch.get(`options/clients`)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(setClientOptions(result.data))
      dispatch(setIsFetchingClientOption(false))
    }
  } catch (error) {
    dispatch(setIsFetchingClientOption(false))
    console.log(error)
  }
}

// Selectors
export const selectProducts = state => state.optionsStore.products
export const selectIsFeching = state => state.optionsStore.isFetchingData
export const selectRoutes = state => state.optionsStore.routes
export const selectLocation = state => state.optionsStore.location
export const selectClientOptions = state => state.optionsStore.clientOptions
export const selectSegmentOptions = state => state.optionsStore.segment
export const selectIsFetchingClientOption = state => state.optionsStore.isFetchingClientOption


export default optionsStore.reducer
