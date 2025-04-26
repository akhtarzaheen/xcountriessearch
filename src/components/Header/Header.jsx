import React from "react";
import styles from "./Header.module.css";

const Header = ({countrySearch}) => {

  const handleCountry = (event) => {
    countrySearch(event.target.value);
  };

  return (
    <header className={styles.header}>
      <input
        type="text"
        onChange={handleCountry}
        placeholder="Search for countries"
        className={styles.searchBox}
      />
    </header>
  );
};

export default Header;