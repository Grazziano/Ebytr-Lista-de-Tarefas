import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/img/2697653_apple_reminders_list_task_tasks_icon.png';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="" width={70} height={70} />

        <h1>Lista de Tarefas</h1>
      </div>
    </header>
  );
}
