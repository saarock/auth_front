import React from 'react'
import ShowAndManageProductComponent from '../../components/adminDashComponents/ShowAndManageProductComponent';
import "./Product.css";
import { Bill } from '../../components';


const Products = () => {
  return (
    <div className='product'>
      <ShowAndManageProductComponent />
      <div className='add-to-card-container'>
        <Bill />
      </div>
    </div>
  )
}

export default Products