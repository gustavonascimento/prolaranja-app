import React from 'react'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import clsx from 'clsx'
import { useStyles } from './style'

const ProductCard = ({className, product, editable, client, updatePrice}) => {
  const classes = useStyles()
  
  const handleChange = (event) => {
    updatePrice(product, event.target.value)
  }

  return (
    
    <div className={clsx(classes.root, className)} style={{backgroundColor: product.primary_color}}>
      <div className={classes.product} style={{backgroundColor: product.secundary_color}}>
        <img src={product.image}/>
      </div>
      <div className={classes.info}>
        <Typography className={classes.productName}> {product.name} </Typography>
        <InputBase
          disabled={!editable} 
          value={product.price}
          onChange={handleChange}
          className={classes.input} 
          classes={{
            input: classes.textAlign
          }}
        />
      </div>
    </div>
  
  )
}

export default ProductCard