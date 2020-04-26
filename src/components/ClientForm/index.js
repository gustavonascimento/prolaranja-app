import React, { useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { FormInput, ActionButton } from '../'
import { useForm } from '../../hooks'
import clsx from 'clsx'
import { useStyles, customizeTitle } from './style'
import {
  closeClientForm,
  updateClients,
  selectIsClientFormOpen,
  selectSelectedClient,
  createClients,
  deleteClients,
  selectIsCreating,
  selectIsDeleting,
  selectIsUpdating
} from '../../reducers/clients'
import { useSelector, useDispatch } from 'react-redux'
import consts from '../../consts'

const DialogTitle = customizeTitle(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const ClientForm = ({ isEditMode }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const isClientFormOpen = useSelector(selectIsClientFormOpen)
  const seletedClient = useSelector(selectSelectedClient)
  const isDeleting = useSelector(selectIsDeleting)
  const isCreating = useSelector(selectIsCreating)
  const isUpdating = useSelector(selectIsUpdating)

  const [
    formState,
    inputTypes
  ] = useForm(seletedClient)

  const handleClose = () => {
    dispatch(closeClientForm())
  }

  const handleRemove = () => {
    if (isEditMode) {
      dispatch(deleteClients(seletedClient))
    } else {
      dispatch(closeClientForm())  
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isEditMode) {
      dispatch(updateClients(formState.values))
    } else {
      dispatch(createClients(formState.values))
    }
  }

  return (
    <React.Fragment>
      <Dialog
        open={isClientFormOpen}
        onClose={handleClose}
        classes={{
          paper: classes.dialog
        }}
      >
        <DialogTitle onClose={handleClose}>
          {isEditMode ? `Editar cliente` : `Adicionar cliente`}
        </DialogTitle>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <DialogContent className={classes.dialogContent}>
            <div className={classes.dialogForm}>
              <FormInput
                borderTop
                property='Nome'
                inputProps={inputTypes.text('name')}
              />
              <FormInput 
                borderTop
                property='Endereço'
                inputProps={inputTypes.text('address')}
              />
              <FormInput 
                borderTop
                property='Telefone'
                inputProps={inputTypes.text('phone')}
              />
              <FormInput 
                borderTop
                property='Responsável'
                inputProps={inputTypes.text('contact')}
              />
              <FormInput 
                borderTop
                property='Username'
                inputProps={inputTypes.text('username')}
              />
              <FormInput 
                borderTop
                property='Senha'
                inputProps={inputTypes.text('pass')}
              />
              <FormInput 
                borderTop
                property='Tipo'
                inputProps={inputTypes.text('type')}
              />
              <FormInput 
                borderTop
                property='Rota'
                inputProps={inputTypes.text('route')}
              />
              <FormInput 
                borderTop
                property='Rota do fim de semana'
                inputProps={inputTypes.text('weekendRoute')}
              /> 
            </div>
            <div className={classes.dialogProduct}>
             producsts
            </div>
          </DialogContent>
          <DialogActions className={classes.actions}>
            <ActionButton 
              variant="secundary"
              onClick={handleRemove}
              className={clsx(classes.button, classes.cancelButton)}
              working={isDeleting}
            >
              {isEditMode ? `Exluir cliente` : `Cancelar`}
            </ActionButton>
            <ActionButton
              type="submit"
              className={clsx(classes.button, classes.confirmButton)}
              working={isCreating || isUpdating}
            >
              {isEditMode ? `Salvar Alterações` : `Adicionar Client`}
            </ActionButton>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  )
}

export default ClientForm