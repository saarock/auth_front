import React, { useState } from 'react'
import ShowAndManageProductComponent from '../../components/adminDashComponents/ShowAndManageProductComponent';
import "./Product.css";
import { Bill } from '../../components';


const Products = () => {

  const [refresh, setRefresh] = useState(false);

  const handelRefresh = () => {
    setRefresh(!refresh);
  }
  return (
    <div className='product'>
      <ShowAndManageProductComponent refresh={refresh} />
      <div className='add-to-card-container'>
        <Bill handelRefresh={handelRefresh} />
      </div>
    </div>
  )
}

export default Products