import React from 'react'
import ProductImages from './Sections/ProductPage/ProductImages'
import ProductDescription from './Sections/ProductPage/ProductDescription'

function ProductComp({product}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-9'>
      <ProductImages images={product?.images} thumbnail={product?.thumbnail} />
      <ProductDescription product={product} />
    </div>
  )
}

export default ProductComp