import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Home />
    </>
  );
}

export default App;
