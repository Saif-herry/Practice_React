import React from 'react'
import styles from '../Style/Navbar.module.css'
import cart from '../assests/cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar_main}>
      <div>
        <p>TeeRexStore</p>
      </div>
      <div   className={styles.navbar_main_right_div}>
            <div>
                <p><Link to="/">Products</Link></p>
            </div>
            <Link to="/cart"> <div className={styles.cart_logo}>
                <img src={cart} alt="cart_logo" />
                <p className={styles.cart_length}>0</p>
            </div>
            </Link>
      </div>
    </nav>
  )
}

export default Navbar
