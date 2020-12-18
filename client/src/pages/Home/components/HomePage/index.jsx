import React from "react";
import { Link } from "react-router-dom";


import { TRICKS_ROUTES } from "~/utils/tricks";

import useStyles from "./styles";

const HomePage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2>HOME PAGE</h2>
      {TRICKS_ROUTES.map((trick) => {
        return (
          <div key={trick.url} className={styles.card}>
            <Link to={trick.url} className={styles.cardLink} />
            <img className={styles.image} src={trick.image} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>{trick.title}</h3>
              <p className={styles.description}>{trick.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
