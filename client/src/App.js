import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import ModalW from './components/ModalW/ModalW';
import './App.scss';
// import { userlogIn } from './api/userLogIn';
// import { fetchData } from './store/slices/dataSlices';
import { fetchSliderItems } from './store/slices/sliderSlices';
import { updateUser } from './store/slices/getLoggedUserSlices';
import { updateLogin } from './store/slices/userLoginSlices';
// import { registeredUserLogin } from './store/slices/userLoginSlices';
// import { getCartItems } from './store/slices/basketArrFromServer';

function App() {
  const dispatch = useDispatch();
  //  This is already registered  User Account
  // const userData = { loginOrEmail: 'feonlinefinal@gmail.com', password: '11111111' };
  useEffect(() => {
    dispatch(updateUser());
    dispatch(updateLogin());
    // dispatch(registeredUserLogin(userData));
    dispatch(fetchSliderItems());
    // dispatch(getCartItems());
  }, []);

  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
      <Modal />
      <ModalW />
    </div>
  );
}

export default App;
