import React from "react";
import ColorFilter from "./ColorFilter";
import styles from '../Style/Filter.module.css'

const Filter = () => {
  return (
    <div>
      <h1>Color</h1>
      <div className={styles.filterComp}>
        <ColorFilter name1={"Red"} name2={"Blue"} name3={"Green"} />
      </div>
      <div className={styles.filterComp}>
        <h4>Gender</h4>
      <ColorFilter name1={"Man"} name2={"Women"} />
      </div>
      <div className={styles.filterComp}>
        <h4>Price</h4>
        <ColorFilter name1={"0-250Rs"} name2={"Rs251-450"} name3={"Rs 450"} />
      </div>
      <div className={styles.filterComp}>
        <h4>Type</h4>
        <ColorFilter name1={"Polo"} name2={"Hoodie"} name3={"Basic"} />
      </div>
    </div>
  );
};

export default Filter;
