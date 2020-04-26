import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './style'


const ClintInfoLine = ({ property, value }) => {
  const classes = useStyles()

  return (
    <div>
      <span className={classes.property}>{property}:</span>
      <span className={classes.value}>{value}</span>
    </div>
  )
}

const ClientInfo = ({client}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <ClintInfoLine property="Cliente" value={client.name} />
          <ClintInfoLine property="Endereço" value={client.address} />
          <ClintInfoLine property="Telefone" value={client.phone} />
          <ClintInfoLine property="Responsável" value={client.contact} />
        </Grid>
        <Grid item xs={6}>
          <ClintInfoLine property="Username" value={client.username} />
          <ClintInfoLine property="Senha" value={client.pass} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ClientInfo