import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectClients,
  selectFechingClients,
  fetchClients
} from '../reducers/clients'

const ClientsPage = () => {
  const clients = useSelector(selectClients)
  const fetchingClients = useSelector(selectFechingClients)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  return (
    <div>
      {!fetchingClients && <div>
        {clients.map(client => <p> {client.name} </p>)}
      </div>}
      {fetchingClients && <div> Feching Clients </div>}
    </div>
  )
}

export default ClientsPage
