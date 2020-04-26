import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import API from '../services/api'
import consts from '../consts'

const fetch = new API()

// Store
export const alertStore = createSlice({
  name: 'clientsStore',
  initialState: {
    isAlertOpen: false,
    alertText: ''
  },
  reducers: {
    closeAlert: (state) => {
      state.isAlertOpen = false
      state.alertText = ''
    },
    openAlert: (state) => {
      state.isAlertOpen = true
    },
    setAlertText: (state, {payload}) => {
      state.alertText = payload
      state.isAlertOpen = true
    }
  }
})

// Reducers
export const { closeAlert, openAlert, setAlertText } = alertStore.actions

// Actions

// Selectors
export const selectIsAlertOpen = state => state.alertStore.isAlertOpen
export const selectAlertText = state => state.alertStore.alertText


export default alertStore.reducer
