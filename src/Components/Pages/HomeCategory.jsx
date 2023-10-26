import React, { useContext } from 'react';
import './CSS/HomeCategory.css';
import { HomeContext } from '../../Context/HomeContext';
import dropdown from '../Assets/dropdown.png';
import Item from '../Item/Item.jsx';


const HomeCategory = (props) => {

  const {all_product} = useContext(HomeContext);

  return (

    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if(props.category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default HomeCategory;
