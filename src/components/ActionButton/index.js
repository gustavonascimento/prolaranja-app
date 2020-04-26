import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useStyles } from './style'

const ActionButton = ({ disabled, children, workingPulse, text, onClick, style, className, variant = 'primary', type = "button", working }) => {
  const classes = useStyles();
  let buttonClasses = classnames(classes.button, {
    [classes.buttonPrimary]: variant === 'primary',
    [classes.buttonSecundary]: variant === 'secundary',
    [classes.buttonTertiary]: variant === 'tertiary',
    [classes.buttonSimple]: variant === 'simple',
    [classes.buttonLogin]: variant === 'login',
    [classes.buttonGreen]: variant === 'green' || variant === 'dark',
    [classes.buttonDark]: variant === 'dark',
    [classes.none]: variant === 'none',
    pulse: workingPulse
  })

  return (
    <ButtonBase
      type={type}
      className={`${buttonClasses} ${className}`}
      onClick={onClick}
      disabled={working || disabled}
      style={style}>
        {working ? (<CircularProgress className={classes.progress} size={14} />) : (children || text)}
    </ButtonBase>
  )
}

export default ActionButton