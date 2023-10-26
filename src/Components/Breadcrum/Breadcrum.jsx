import React from 'react'
import './Breadcrum.css';
import rightshift from '../Assets/rightshift.png';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={rightshift} alt="" /> SHOP <img src={rightshift} alt="" /> {product.category} <img src={rightshift} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum;
