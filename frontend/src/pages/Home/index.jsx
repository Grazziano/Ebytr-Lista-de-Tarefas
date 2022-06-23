import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FiRefreshCw } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseURL = 'http://localhost:3001';

  function listTask() {
    setLoading(true);
    axios.get(`${baseURL}/task`).then((response) => {
      // console.log(response.data);
      setTasks(response.data);
    });
    setLoading(false);
  }

  function handleStatus(value, taskId) {
    // console.log(value, taskId);
    setLoading(true);
    axios
      .put(`${baseURL}/task/status`, { task_id: taskId, status: value })
      .then((response) => {
        console.log(response);
        toast.success('Status Alterado com sucesso!');
        listTask();
      })
      .catch((e) => {
        console.log(e);
        toast.error('Falha!');
      });
    setLoading(false);
  }

  function handleRemove(id) {
    setLoading(true);
    axios
      .delete(`${baseURL}/task/remove`, {
        params: {
          task_id: id,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success('Tarefa excluída!');
        listTask();
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }

  useEffect(() => {
    listTask();
  }, []);

  if (loading) return <Loading />;

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
                value={task.status}
              >
                <option value="pendente">pendente</option>
                <option value="em andamento">em andamento</option>
                <option value="pronto">pronto</option>
              </select>

              <div className={styles.divButtons}>
                <button>
                  <BiEdit color="#ffd900" />
                </button>
                <button onClick={() => handleRemove(task.id)}>
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
