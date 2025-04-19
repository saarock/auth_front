import React from 'react'
import ShowAndManageProductComponent from '../../components/adminDashComponents/ShowAndManageProductComponent';
import "./Product.css";


const Products = () => {
  return (
    <div className='product'>
      <ShowAndManageProductComponent />
      <div className='add-to-card-container'>

      </div>
    </div>
  )
}

export default Products