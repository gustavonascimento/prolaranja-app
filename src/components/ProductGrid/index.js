import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ProductCard from '../ProductCard'
import clsx from 'clsx'
import { useStyles } from './style'

const ProductGrid = ({ classes = {}, produtcs = [], client, editable, updatePrice }) => {
  const myClasses = useStyles()

  return (
    <div className={myClasses.parentRoot}>
      <React.Fragment>
        <IconButton aria-label="delete" className={myClasses.buttonLeft} size="small">
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>

        <div className={clsx(myClasses.root, classes.root)}>
          {produtcs.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className={myClasses.item} 
              editable={editable} 
              updatePrice={updatePrice} 
            />))
          }
        </div>

        <IconButton aria-label="delete" className={myClasses.buttonRight} size="small">
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </React.Fragment>
    </div>
  )
}



export default ProductGrid