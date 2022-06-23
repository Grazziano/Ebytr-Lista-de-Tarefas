import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FiRefreshCw } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const baseURL = 'http://localhost:3001';

  function listTask() {
    axios.get(`${baseURL}/task`).then((response) => {
      // console.log(response.data);
      setTasks(response.data);
    });
  }

  function handleStatus(value, taskId) {
    // console.log(value, taskId);
    axios
      .put(`${baseURL}/task/status`, { task_id: taskId, status: value })
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
    toast('Status Alterado com sucesso!');
  }

  useEffect(() => {
    listTask();
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

              <select
                name=""
                id=""
                onChange={({ target }) => handleStatus(target.value, task.id)}
              >
                <option value="pendente">pendente</option>
                <option value="em andamento">em andamento</option>
                <option value="pronto">pronto</option>
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
