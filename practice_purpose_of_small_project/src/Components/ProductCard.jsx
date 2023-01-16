import React from 'react'
import styles from '../Style/Product.module.css'

const ProductCard = ({
    id,
    image,
    name,
    type,
    price,
    currency,
    color,
    gender,
    qty
}) => {
  return (
    <div className={styles.productCard_main}>
      <div className={styles.productCard_main_imageBox}>
        <p>{name}</p>
        <img src={image} alt={name} />
      </div >
      <div className={styles.price_and_cart_div}>
        <p className={styles.price}>Rs.{price}{" "}{currency}</p>
        <button className={styles.buttons}>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
