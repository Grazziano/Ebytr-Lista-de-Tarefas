import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FiRefreshCw } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import RemoveIcon from '../../assets/img/icons8-excluir-96.png';
import AddIcon from '../../assets/img/icons8-adicionar-96.png';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState('');

  const baseURL = 'http://localhost:3001';

  function listTask() {
    setLoading(true);
    axios.get(`${baseURL}/task`).then((response) => {
      setTasks(response.data);
    });
    setLoading(false);
  }

  function handleStatus(value, taskId) {
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

  function handleUpdate(id) {
    if (inputValue === '') return;

    axios
      .put(`${baseURL}/task/update`, { task_id: id, name: inputValue })
      .then((response) => {
        console.log(response.data);
        toast.success('Tarefa atualizada com sucesso!');
      })
      .catch((e) => {
        console.log(e);
        toast.error('Falha!');
      });

    setInputValue('');
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

  function handleSubmit(event) {
    event.preventDefault();
    if (newTaskValue === '') {
      toast.error('Nome da Task é obrigatório');
      return;
    }

    axios
      .post(`${baseURL}/task`, { name: newTaskValue })
      .then((response) => {
        console.log(response.data);
        setNewTaskValue('');
        toast.success('Tarefa criada com sucesso!');
        listTask();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function compareByName(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  function compareByDate(a, b) {
    if (a.created_at < b.created_at) return -1;
    if (a.created_at > b.created_at) return 1;
    return 0;
  }

  function compareByStatus(a, b) {
    if (a.status < b.status) return -1;
    if (a.status > b.status) return 1;
    return 0;
  }

  function handleOrder(order) {
    if (order === 'orderByName') {
      axios.get(`${baseURL}/task`).then((response) => {
        setTasks(response.data.sort(compareByName));
      });
    }
    if (order === 'orderByDate') {
      axios.get(`${baseURL}/task`).then((response) => {
        setTasks(response.data.sort(compareByDate));
      });
    }
    if (order === 'orderByStatus') {
      axios.get(`${baseURL}/task`).then((response) => {
        setTasks(response.data.sort(compareByStatus));
      });
    }
  }

  useEffect(() => {
    listTask();
  }, [inputValue]);

  if (loading) return <Loading />;

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={newTaskValue}
          onChange={({ target }) => setNewTaskValue(target.value)}
        />
        <button type="submit">
          <img src={AddIcon} alt="Add" />
        </button>
      </form>

      <div className={styles.containerHeader}>
        <h1>Tarefas</h1>
        <button onClick={listTask}>
          <FiRefreshCw size={25} color="#3fffa3" />
        </button>
      </div>

      <div className={styles.radio}>
        <span className={styles.selectTag}>Ordenar lista por: </span>
        <input
          label="ordem alfabética"
          type="radio"
          id="orderByName"
          name="order"
          value="orderByName"
          onClick={({ target }) => handleOrder(target.value)}
        />
        <input
          label="data de criação"
          type="radio"
          id="orderByDate"
          name="order"
          value="orderByDate"
          onClick={({ target }) => handleOrder(target.value)}
        />
        <input
          label="status"
          type="radio"
          id="orderByStatus"
          name="order"
          value="orderByStatus"
          onClick={({ target }) => handleOrder(target.value)}
        />
      </div>

      <article className={styles.listTasks}>
        {tasks.length === 0 && <h1>Nenhuma tarefa disponível no momento</h1>}

        {tasks.map((task) => {
          return (
            <section className={styles.taskItem} key={task.id}>
              <button>
                <div className={styles.tag}></div>
              </button>

              <input
                type="text"
                defaultValue={task.name}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => handleUpdate(task.id)}
              />

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
                <button onClick={() => handleRemove(task.id)}>
                  <img src={RemoveIcon} alt="Delete" width={25} />
                </button>
              </div>
            </section>
          );
        })}
      </article>
    </main>
  );
}
