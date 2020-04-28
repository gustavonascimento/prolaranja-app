import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import AddIcon from '@material-ui/icons/Add'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectFilteredClients,
  selectClients,
  selectFechingClients,
  selectIsClientFormOpen,
  fetchClients,
  openClientForm,
  setSelectedClient,
  setNameFilter,
  setRouteFilter,
  setSegmentFilter,
  setLocationFilter
} from '../../reducers/clients'
import { selectLocation, selectRoutes, selectSegmentOptions } from '../../reducers/options'
import { ClientItem, ClientForm, ProCard, ProSelect } from '../../components'
import { DebounceInput } from 'react-debounce-input'
import { useStyles } from './style'

const ClientsPage = () => {
  const classes = useStyles()
  const clients = useSelector(selectFilteredClients)
  const isClientFormOpen = useSelector(selectIsClientFormOpen)
  const fetchingClients = useSelector(selectFechingClients)
  const routerOptions = useSelector(selectRoutes)
  const localOptions = useSelector(selectLocation)
  const segmentOptions = useSelector(selectSegmentOptions)
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
                  inputComponent={DebounceInput}
                  className={classes.searchInput}
                  placeholder="Procurar cliente"
                  classes={{
                    input: classes.searchInputElement,
                  }}
                  inputProps={{ 
                    debounceTimeout: 500
                  }}
                  onChange={(e) => dispatch(setNameFilter(e.target.value))}
                />
              </Grid>
              <Grid item xs={12}>
                <ProSelect 
                  title="Rota"
                  options={routerOptions}
                  className={classes.select}
                  onChange={(value) => dispatch(setRouteFilter(value))}
                />
                <ProSelect
                  title="Tipo de cliente"
                  options={segmentOptions}
                  className={classes.select}
                  onChange={(value) => dispatch(setSegmentFilter(value))}
                />
                <ProSelect
                  title="Local"
                  options={localOptions}
                  onChange={(value) => dispatch(setLocationFilter(value))}
                />
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
