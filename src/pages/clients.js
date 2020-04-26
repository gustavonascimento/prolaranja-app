import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectClients,
  selectFechingClients,
  selectIsClientFormOpen,
  fetchClients,
  openClientForm,
  setSelectedClient
} from '../reducers/clients'
import { ClientItem, ClientForm } from '../components'

const ClientsPage = () => {
  const clients = useSelector(selectClients)
  const isClientFormOpen = useSelector(selectIsClientFormOpen)
  const fetchingClients = useSelector(selectFechingClients)
  const dispatch = useDispatch()
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  const handleEdit = (client) => {
    dispatch(setSelectedClient(client))
    setIsEditMode(true)
    dispatch(openClientForm())
  }

  return (
    <div>
      {!fetchingClients && <div>
        {clients.map((client, index)=> <ClientItem key={index} client={client} onEdit={handleEdit} />)}
      </div>}
      {fetchingClients && <div> Feching Clients </div>}

      {isClientFormOpen && <ClientForm isEditMode={isEditMode} />}
    </div>
  )
}

export default ClientsPage
