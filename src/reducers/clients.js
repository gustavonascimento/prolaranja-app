import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import API from '../services/api'
import { setAlertText } from './alert'
import consts from '../consts'

const fetch = new API()

// Store
export const clientsStore = createSlice({
  name: 'clientsStore',
  initialState: {
    clients: [],
    selectedClient: {},
    fechingData: false,
    isCreating: false,
    isUpdating: false,
    isDeleting: false,
    isClientFormOpen: false
  },
  reducers: {
    setFechingData: (state, action) => {
      state.fechingData = action.payload
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
    setSelectedClient: (state, action) => {
      state.selectedClient = action.payload
    },
    addClients: (state, action) => {
      state.clients = _.concat(state.clients, action.payload)
    },
    updateClient: (state, action) => {
      const targetClient = action.payload
      const index = state.clients.findIndex(client => client.id === targetClient.id)
      state.clients[index] = targetClient
    },
    removeClient: (state, action) => {
      _.remove(state.clients, action.payload)
    },
    openClientForm: (state) => {
      state.isClientFormOpen = true
    },
    closeClientForm: (state) => {
      state.isClientFormOpen = false
    }
  }
})

// Reducers
export const { setIsCreating, setIsDeleting, setIsUpdating, removeClient, addClients, setFechingData, openClientForm, closeClientForm, setSelectedClient, updateClient } = clientsStore.actions

// Actions
export const fetchClients = () => async dispatch => {
  try {
    dispatch(setFechingData(true))
    const result = await fetch.get('clients')
    if (result.kind === consts.apiStatus.ok) {
      dispatch(addClients(result.data || []))
    }
    dispatch(setFechingData(false))
  } catch (error) {
    dispatch(setFechingData(false))
    console.log(error)
  }
}

export const createClients = (client) => async dispatch => {
  try {
    dispatch(setIsCreating(true))
    const result = await fetch.post('clients', client)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(addClients(result.data || []))
      dispatch(closeClientForm())
      dispatch(setAlertText(`${client.name} criado com sucesso`))
    }
    dispatch(setIsCreating(false))
  } catch (error) {
    dispatch(setIsCreating(false))
    console.log(error)
  }
}

export const updateClients = (client) => async dispatch => {
  try {
    dispatch(setIsUpdating(true))
    const result = await fetch.put(`clients/${client.id}`, client)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(updateClient(result.data))
      dispatch(setIsUpdating(false))
      dispatch(closeClientForm())
      dispatch(setAlertText(`Alterações salvas com sucesso`))
    }
  } catch (error) {
    dispatch(setIsUpdating(false))
    console.log(error)
  }
}

export const deleteClients = (client) => async dispatch => {
  try {
    dispatch(setIsDeleting(true))
    const result = await fetch.delete(`clients/${client.id}`)
    if (result.kind === consts.apiStatus.ok) {
      dispatch(removeClient(client))
      dispatch(setIsDeleting(false))
      dispatch(closeClientForm())
      dispatch(setAlertText(`${client.name} exluído com sucesso`))
    }
  } catch (error) {
    dispatch(setIsDeleting(false))
    console.log(error)
  }
}

// Selectors
export const selectClients = state => state.clientsStore.clients
export const selectFechingClients = state => state.clientsStore.fechingData
export const selectIsClientFormOpen = state => state.clientsStore.isClientFormOpen
export const selectSelectedClient = state => state.clientsStore.selectedClient
export const selectIsCreating = state => state.clientsStore.isCreating
export const selectIsDeleting = state => state.clientsStore.isDeleting
export const selectIsUpdating = state => state.clientsStore.isUpdating

export default clientsStore.reducer
