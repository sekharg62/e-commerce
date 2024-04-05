import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item'
export default function RelatedProducts() {
  return (
    <div className='relatedproducts'>
      <h1>Related Producs</h1>
      <hr />
      <div className="relatedproducts-item">
         {
            data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
         }
      </div>
    </div>
  )
}
