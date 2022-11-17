import { Box, Button, Grid } from '@mui/material'
import useProduct from 'hooks/useProduct'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProductToCart } from 'redux/cartSlice/CartSlice'

const DetailProduct = () => {
  const {id} = useParams()
  const cartState = useSelector(state => state.cart)
  const {product} = useProduct(id)
  const [error, setError] = useState(null)

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    setError(null)
    if (e.target['color'].value === '-1') {
      setError('Color option is required')
      return false
    } else if (e.target['storage'].value === '-1') {
      setError('Storage option is required')
      return false
    } else {
      const elementToCart = {
        id: cartState.length + 1,
        colorCode: e.target['color'].value,
        storageCode: e.target['storage'].value
      }
      dispatch(addProductToCart(elementToCart))
    }
  }


  return (
    <>{product ?
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={4}><img src={product.imgUrl} alt={product.id} lazy='loading' /></Grid>
          <Grid item xs={4}>
          <h3>Description</h3>
            <div>
              {Object.keys(product).map((prod, value) => {
                return typeof product[prod] !== 'string' || typeof product[prod] !== 'number' ? <div key={prod}><u>{prod}</u>:{value}</div> : ''
              })}
            </div>
          </Grid>
          <Grid item xs={4}>
            <h3>Actions</h3>
            <form onSubmit={onSubmit}>
              <div>
                Color:
                <select name='color'>
                  {product.options.colors.length > 1 ? <option value='-1'>Select an option</option> : ''}
                  {product.options.colors.map((color) => (
                    <option key={color.code} value={color.code}>{color.name}</option>
                  ))}
                </select>
              </div>
              <div>
                Storage:
                <select name='storage'>
                  {product.options.storages.length > 1 ? <option value='-1'>Select an option</option> : ''}
                  {product.options.storages.map((storage) => (
                    <option key={storage.code} value={storage.code}>{storage.name}</option>
                  ))}
                </select>
              </div>
              {error ? <div class='DetailProduct__error'>{error}</div> : ''}
              <Button type='submit'>Add to cart</Button>
            </form>
          </Grid>
        </Grid>
      </Box>
  : <div>Loading...</div>}</>
  )
}

export default React.memo(DetailProduct)