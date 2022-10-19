import React from 'react';
import styles from '../styles/modules/title.module.scss';

function PageTitle() {
  let date = new Date();
  let options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = date.toLocaleString('en-US', (options))
  return (
    <><p className={styles.title}>
      my day
    </p><p className={styles.date}>{today}</p></>
  );
}

export default PageTitle;
