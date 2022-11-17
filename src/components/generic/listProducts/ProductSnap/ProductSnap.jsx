import React from 'react'
import { Link } from 'react-router-dom'

const ProductSnap = ({product}) => {
  return (
    <Link to={'/detail/'+ product.id} style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
        <div className='ProductSnap'>
            <img lazy='loading' src={product.imgUrl} alt={product.id}/>
        </div>
        <div>{product.brand}</div>
        <div>{product.model}</div>
        {product.price && <div>{product.price}</div>}
    </Link>
  )
}

export default React.memo(ProductSnap)