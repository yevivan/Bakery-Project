import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import './App.scss';
import { fetchData } from './store/slices/dataSlices';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
