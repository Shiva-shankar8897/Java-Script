import React, { useState } from 'react'
import './Items.css'
import Itemsblock from './itemsblock/Itemsblock'

function Items() {
  const [items,setitems]=useState([
    { 'image':'https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg',
      'name':'C2P PROFESSIONAL MAKEUP',
      'rating':4,
      'numRatings':27,
      'price': '422.00'
    },
    { 'image':'https://images-eu.ssl-images-amazon.com/images/I/51amGiWb3iL._AC_UL160_SR160,160_.jpg',
      'name':'C2P PROFESSIONAL MAKEUP',
      'rating':4.5,
      'numRatings':57,
      'price': '922.00'
    },
    { 'image':'https://images-eu.ssl-images-amazon.com/images/I/6185eFxd65L._AC_UL160_SR160,160_.jpg',
     'name':'C2P PROFESSIONAL MAKEUP',
     'rating':4.7,
     'numRatings':63,
      'price': '1422.00'
    },
    { 'image':'https://images-eu.ssl-images-amazon.com/images/I/51wNDV2Ux6L._AC_UL160_SR160,160_.jpg',
      'name':'C2P PROFESSIONAL MAKEUP',
      'rating':5,
      'numRatings':129,
      'price': '1222.00'
    }
])

  return (
    <div>
       <h2>Customers who viewed items in your browsing history also viewed</h2>
         
       <div id='itemsblock'>
       {items.map((product,index) => <Itemsblock image={product.image} name={product.name} rating={product.rating} numRatings={product.numRatings} price={product.price} />)} 
         {/*<Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
        <Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
        <Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
        <Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
        <Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
        <Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
        <Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
        <Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
        <Itemsblock image='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'/>
         */}
         </div>
       <br/>   
      
    </div>
  )
}

export default Items
