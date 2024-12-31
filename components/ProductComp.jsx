import React from 'react'
import ProductImages from './Sections/ProductPage/ProductImages'
import ProductDescription from './Sections/ProductPage/ProductDescription'

function ProductComp() {
  return (
    <div className='grid grid-cols-2 grid-flow-row items-start justify-evenly gap-5 py-9'>
      <ProductImages/>
      <ProductDescription/>
    </div>
  )
}

export default ProductComp