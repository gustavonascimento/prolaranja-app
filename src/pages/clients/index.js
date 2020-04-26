import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import AddIcon from '@material-ui/icons/Add'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectClients,
  selectFechingClients,
  selectIsClientFormOpen,
  fetchClients,
  openClientForm,
  setSelectedClient
} from '../../reducers/clients'
import { selectLocation, selectRoutes } from '../../reducers/options'
import { ClientItem, ClientForm, ProCard, ProSelect } from '../../components'
import { useStyles } from './style'

const typeOptions = [
  {
    value: 1,
    text: 'Hotel'
  },
  {
    value: 2,
    text: 'Padaria'
  },
  {
    value: 3,
    text: 'Bar'
  },
  {
    value: 4,
    text: 'Restaurante'
  }
]

const ClientsPage = () => {
  const classes = useStyles()
  const clients = useSelector(selectClients)
  const isClientFormOpen = useSelector(selectIsClientFormOpen)
  const fetchingClients = useSelector(selectFechingClients)
  const routerOptions = useSelector(selectRoutes)
  const localOptions = useSelector(selectLocation)
  const dispatch = useDispatch()
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    console.log('Fetching clients')
    dispatch(fetchClients())
  }, [])

  const handleEdit = (client) => {
    dispatch(setSelectedClient(client))
    setIsEditMode(true)
    dispatch(openClientForm())
  }

  const handleNew = () => {
    dispatch(setSelectedClient({}))
    setIsEditMode(false)
    dispatch(openClientForm())
  }

  return (
    <>
      <ProCard className={classes.searchCard}>
        <Grid container>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12} className={classes.searchBox}>
                <Typography component="span" className={classes.searchLabel}> Busca </Typography>
                <InputBase
                  fullWidth
                  className={classes.searchInput}
                  placeholder="Procurar cliente"
                  classes={{
                    input: classes.searchInputElement
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <ProSelect title="Rota" options={routerOptions} className={classes.select} />
                <ProSelect title="Tipo de cliente" options={typeOptions} className={classes.select} />
                <ProSelect title="Local" options={localOptions} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" classes={{
              root: classes.addbutton,
              label: classes.addButtonLabel
            }}
              onClick={handleNew}
            >
              <AddIcon />
              <span>
                Adicionar cliente
              </span>
            </Button>
          </Grid>
        </Grid>
      </ProCard>
      <div>
        {!fetchingClients && <div>
          {clients.map((client, index) => <ClientItem key={index} client={client} onEdit={handleEdit} />)}
        </div>}
        {fetchingClients && <div> Feching Clients </div>}

        {isClientFormOpen && <ClientForm isEditMode={isEditMode} />}
      </div>
    </>
  )
}

export default ClientsPage
