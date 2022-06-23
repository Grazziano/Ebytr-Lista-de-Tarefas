import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FiRefreshCw } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import setupAPIClient from '../../services/api';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  async function getAllTasks() {
    const data = await setupAPIClient();
    console.log(data);
    setTasks(data);
  }

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <h1>Tarefas</h1>
        <button>
          <FiRefreshCw size={25} color="#3fffa3" />
        </button>
      </div>

      <article className={styles.listTasks}>
        {tasks.map((task) => {
          return (
            <section className={styles.taskItem} key={task.id}>
              <button>
                <div className={styles.tag}></div>
                <span>{task.name}</span>
              </button>

              <select name="" id="">
                <option value="">pendente</option>
                <option value="">em andamento</option>
                <option value="">pronto</option>
              </select>

              <div className={styles.divButtons}>
                <button>
                  <BiEdit color="#ffd900" />
                </button>
                <button>
                  <AiFillDelete color="#ca2727" />
                </button>
              </div>
            </section>
          );
        })}
      </article>
    </main>
  );
}
