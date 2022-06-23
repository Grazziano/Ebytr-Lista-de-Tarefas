import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/img/logo.png';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="" width={70} height={70} />

        <h1>Task List</h1>
      </div>
    </header>
  );
}
