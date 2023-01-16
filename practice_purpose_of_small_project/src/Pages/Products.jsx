import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import Search from "../Components/Search";
import { getProductData } from "../redux/action";
import styles from '../Style/Product.module.css'

const Products = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((store) => store);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getProductData());
    }
  }, []);
  return (
    <div className={styles.products_main}>
      <div className={styles.products_main_leftDiv}>
        <Filter />
      </div>
      <div className={styles.products_main_rightDiv}>
        <div><Search /></div>
        <div className={styles.products_main_div}>
          {isLoading ? (
            <div>...Loading</div>
          ) : isError ? (
            <div>...Error</div>
          ) : (
            data?.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.imageURL}
                  name={item.name}
                  type={item.type}
                  price={item.price}
                  currency={item.currency}
                  color={item.color}
                  gender={item.gender}
                  qty={item.quantity}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
