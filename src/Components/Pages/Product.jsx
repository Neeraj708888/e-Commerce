import React, { useContext } from 'react'
import { HomeContext } from '../../Context/HomeContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrum/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

const Product = () => {
  const  {all_product} = useContext(HomeContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id ===Number(productId));
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
