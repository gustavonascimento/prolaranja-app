import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ClientInfo from '../ClientInfo'
import ProductGrid from '../ProductGrid'
import { useStyles } from './style'

const noop = () => {}

const ClientItem = ({ client = {}, onEdit = noop }) => {
  const classes = useStyles()

  const editClint = (event) => {
    event.stopPropagation()
    onEdit(client)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel
        square
        classes={{
          root: classes.card
        }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{
            content: classes.cardSummary,
            expandIcon: classes.cardSummaryIcon
          }}
        >
          <Typography className={classes.heading}>{client.name}</Typography>
          <span className={classes.darkLabel}>
            {client.route && client.route.name}
          </span>
          <span className={classes.lightLabel}>
            {client.segment}
          </span>
          <IconButton
            className={classes.editButton}
            size="small"
            onClick={editClint}
          >
            <img className={classes.editButtonIcon} src="/assets/edit.svg" />
          </IconButton>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item xs={12}>
              <ClientInfo client={client} />
            </Grid>
            <Grid item xs={12}>
              <ProductGrid produtcs={client.products} />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default ClientItem