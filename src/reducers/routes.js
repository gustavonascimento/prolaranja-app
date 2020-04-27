import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import API from '../services/api'
import { setAlertText } from './alert'
import consts from '../consts'

const fetch = new API()

// Store
export const routesStore = createSlice({
  name: 'routesStore',
  initialState: {
    routes: [],
    isFetchingData: true,
    isCreating: false,
    isUpdating: false,
    isDeleting: false,
    selectedRoute: { clients: [] },
    isRouteOpen: false
  },
  reducers: {
    setRoutes: (state, { payload }) => {
      state.routes = payload
    },
    setIsCreating: (state, action) => {
      state.isCreating = action.payload
    },
    setIsDeleting: (state, action) => {
      state.isDeleting = action.payload
    },
    setIsUpdating: (state, action) => {
      state.isUpdating = action.payload
    },
    setIsRouteOpen: (state, { payload }) => {
      state.isRouteOpen = payload
    },
    setSelectedRoute: (state, { payload = { clients: [] } }) => {
      state.selectedRoute = payload
    },
    setIsFechingData: (state, { payload }) => {
      state.isFetchingData = payload
    },
    addRoutes: (state, action) => {
      state.routes = _.concat(state.routes, action.payload)
    },
    updateRoutes: (state, action) => {
      const targetRoute = action.payload
      const index = state.routes.findIndex(route => route.id === targetRoute.id)
      state.routes[index] = targetRoute
    },
    removeRoute: (state, action) => {
      _.remove(state.routes, action.payload)
    },
  }
})

// Reducers
export const { 
  setIsFechingData,
  setRoutes,
  setSelectedRoute,
  setIsRouteOpen,
  setIsDeleting,
  setIsCreating,
  setIsUpdating,
  updateRoutes,
  addRoutes,
  removeRoute
} = routesStore.actions

// Actions
export const fetchRoutes = () => async dispatch => {
  try {
    dispatch(setIsFechingData(true))
    const result = await fetch.get(`routes`)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(setRoutes(result.data))
      dispatch(setIsFechingData(false))
    }
  } catch (error) {
    dispatch(setIsFechingData(false))
    console.log(error)
  }
}


export const createRoute = (route) => async dispatch => {
  try {
    dispatch(setIsCreating(true))
    const result = await fetch.post('routes', route)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(addRoutes(result.data || []))
      dispatch(setSelectedRoute(result.data))
      dispatch(setAlertText(`${route.name} criada com sucesso`))
    }
    dispatch(setIsCreating(false))
  } catch (error) {
    dispatch(setIsCreating(false))
    console.log(error)
  }
}

export const updateRoute = (route) => async dispatch => {
  try {
    dispatch(setIsUpdating(true))
    const result = await fetch.put(`routes/${route.id}`, route)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(updateRoutes(result.data))
      dispatch(setSelectedRoute(result.data))
      dispatch(setIsUpdating(false))
      dispatch(setAlertText(`Alterações salvas com sucesso`))
    }
  } catch (error) {
    dispatch(setIsUpdating(false))
    console.log(error)
  }
}

export const deleteRoute = (route) => async dispatch => {
  try {
    dispatch(setIsDeleting(true))
    const result = await fetch.delete(`routes/${route.id}`)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(removeRoute(route))
      dispatch(setIsDeleting(false))
      dispatch(setIsRouteOpen(false))
      dispatch(setSelectedRoute())
      dispatch(setAlertText(`${route.name} exluída com sucesso`))
    }
  } catch (error) {
    dispatch(setIsDeleting(false))
    console.log(error)
  }
}

// Selectors
export const selectIsFeching = state => state.routesStore.isFetchingData
export const selectRoutes = state => state.routesStore.routes
export const selectSelectedRoute = state => state.routesStore.selectedRoute
export const selectIsRouteOpen = state => state.routesStore.isRouteOpen
export const selectIsCreating = state => state.routesStore.isCreating
export const selectIsDeleting = state => state.routesStore.isDeleting
export const selectIsUpdating = state => state.routesStore.isUpdating


export default routesStore.reducer
