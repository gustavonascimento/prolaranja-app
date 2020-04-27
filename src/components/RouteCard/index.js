import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CloseIcon from '@material-ui/icons/Close'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import classnames from 'classnames'
import { useForm } from '../../hooks'
import { ActionButton } from '../'
import {
  deleteRoute,
  createRoute,
  updateRoute,
  selectIsDeleting,
  selectIsCreating,
  selectIsUpdating
} from '../../reducers/routes'
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from './style'


const RouteCard = ({ route, modal, onSelect, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const isDeleting = useSelector(selectIsDeleting)
  const isCreating = useSelector(selectIsCreating)
  const isUpdating = useSelector(selectIsUpdating)

  const [isEditMode, setIsEditMode] = useState(route.id ? false : true)

  const [
    formState,
    inputTypes
  ] = useForm({ ...route, name: route.name || '' })

  const onSettingAction = () => {
    if (modal) {
      handleClose()
    } else {
      onSelect(route)
    }
  }

  const onDelete = () => {
    dispatch(deleteRoute(route))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState.values)
    if (route.id) {
      dispatch(updateRoute(formState.values))
    } else {
      dispatch(createRoute(formState.values))
    }
    
  }

  const renderTitle = () => {
    if (isEditMode) {
      return (
        <InputBase 
          required 
          inputProps={inputTypes.text('name')} 
          autoFocus 
          classes={{ root: classes.inputCreate }}
        />
      )
    } else {
      return <div className={classnames({
        [classes.title]: modal
      })} onClick={() => { 
        if (modal) setIsEditMode(true) 
      }}>{route.name}</div>
    }
  }

  const renderSubtitle = () => {
    if (route.id) {
      switch (route.clients.length) {
        case 1:
          return `${route.clients.length} cliente`
        case 0:
          return `Nenhum cliente`
        default:
          return `${route.clients.length} clientes`
      }
    }
  }

  return (
    <Card className={classnames({
      [classes.root]: true,
      [classes.modalRoot]: modal
    })}>
      <form onSubmit={onSubmit} onBlur={() => { setIsEditMode(false) }}>
        <CardHeader
          action={
            <React.Fragment>
              {modal && route.id && !isEditMode && (
                <IconButton onClick={onDelete} disabled={isDeleting} aria-label="settings" className={classes.icon}>
                  {isDeleting ? <CircularProgress color="#fff" className={classes.progress} size={14} /> : <DeleteIcon />}
                </IconButton>
              )}

              {modal && isEditMode && (
                <ActionButton type="submit" working={isCreating || isUpdating} className={classes.createButton}> 
                  {route.id ? 'Atualizar' : 'Adicionar' }
                </ActionButton>
              )}

              <IconButton onClick={onSettingAction} aria-label="settings" className={classes.icon}>
                {!modal && (
                  <MoreVertIcon />
                )}
                {modal && (
                  <CloseIcon />
                )}
              </IconButton>
            </React.Fragment>
          }
          title={renderTitle()}
          subheader={renderSubtitle()}
          subheaderTypographyProps={{
            variant: "caption"
          }}
          titleTypographyProps={{
            variant: "h6"
          }}
          classes={{
            subheader: classes.cardSubheader
          }}
        />
      </form>
      {!modal && (
        <div className={classes.body}>
          {route.clients.map((client, index) => {
            return (
              <div key={index} className={classnames({
                [classes.item]: true,
                [classes.lastItem]: index === route.clients.length - 1,
              })}>
                {client.name}
              </div>
            )
          })}
        </div>
      )}
      {modal && route.id && (
        <div className={classes.body}>
          <InputBase className={classes.input} placeholder="Buscar cliente" />
          <Divider className={classes.divider} />

          <Typography variant="overline" display="block" gutterBottom className={classes.listTitle}>
            Clientes na rota
          </Typography>
          {route.clients.map((client, index) => {
            return (
              <div key={index} className={classnames({
                [classes.item]: true,
                [classes.lastItem]: index === route.clients.length - 1,
              })}>
                {client.name}
                {modal && (
                  <IconButton onClick={onDelete} aria-label="settings" className={classes.itemAction}>
                    <RemoveIcon classes={{ root: classes.itemActionIcon }} />
                  </IconButton>
                )}
              </div>
            )
          })}

          <Divider className={classes.divider} />
          <Typography variant="overline" display="block" gutterBottom className={classes.listTitle}>
            Clientes sem rota
          </Typography>

          {route.clients.map((client, index) => {
            return (
              <div key={index} className={classnames({
                [classes.item]: true,
                [classes.lastItem]: index === route.clients.length - 1,
              })}>
                {client.name}
                {modal && (
                  <IconButton onClick={onDelete} aria-label="settings" className={classes.itemAction}>
                    <AddIcon classes={{ root: classes.itemActionIcon }} />
                  </IconButton>
                )}
              </div>
            )
          })}

        </div>
      )}

    </Card>
  )
}

export default RouteCard