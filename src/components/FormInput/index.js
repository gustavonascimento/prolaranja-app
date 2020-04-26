import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'
import clsx from 'clsx'
import { useStyles } from './style'

const FormInput = (props) => {
  const classes = useStyles()
  const { property, borderBottom, borderTop, inputProps } = props

  return (
    <Grid container alignItems='center' spacing={1} className={
      classnames({
        [classes.borderTop]: props.borderTop,
        [classes.borderBottom]: props.borderBottom
      })
    }>
      <Grid item>
        {property}
      </Grid>
      <Grid item className={classes.inputContainer}>
        <InputBase
          inputProps={inputProps}
          fullWidth
          className={clsx(classes.root, props.className)}
        />
      </Grid>
    </Grid>

  )
}

export default FormInput