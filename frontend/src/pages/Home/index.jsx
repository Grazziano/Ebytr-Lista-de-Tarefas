import React from 'react';
import styles from './styles.module.scss';
import { FiRefreshCw } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <h1>Tarefas</h1>
        <button>
          <FiRefreshCw size={25} color="#3fffa3" />
        </button>
      </div>

      <article className={styles.listTasks}>
        <section className={styles.taskItem}>
          <button>
            <div className={styles.tag}></div>
            <span>Tarefa</span>
          </button>

          <select name="" id="">
            <option value="">Pendente</option>
            <option value="">Pendente</option>
            <option value="">Pendente</option>
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
      </article>
    </main>
  );
}
