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
    isFetchingData: true
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload
    },
    setRoutes: (state, { payload }) => {
      state.routes = payload
    },
    setLocation: (state, { payload }) => {
      state.location = payload
    },
    setIsFechingData: (state, { payload }) => {
      state.isFetchingData = payload
    }
  }
})

// Reducers
export const { 
  setProducts, 
  setIsFechingData,
  setRoutes,
  setLocation
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
      dispatch(setIsFechingData(false))
    }
  } catch (error) {
    dispatch(setIsFechingData(false))
    console.log(error)
  }
}

// Selectors
export const selectProducts = state => state.optionsStore.products
export const selectIsFeching = state => state.optionsStore.isFetchingData
export const selectRoutes = state => state.optionsStore.routes
export const selectLocation = state => state.optionsStore.location


export default optionsStore.reducer
