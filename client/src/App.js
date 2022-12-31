import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import './App.scss';
// import { userlogIn } from './api/userLogIn';
// import { fetchData } from './store/slices/dataSlices';
import { fetchSliderItems } from './store/slices/sliderSlices';
// import { registeredUserLogin } from './store/slices/userLoginSlices';
// import { getCartItems } from './store/slices/basketArrFromServer';
import { setUpdatedCartItemsFromLocal } from './store/slices/cartItems';

function App() {
  const dispatch = useDispatch();
  //  This is already registered  User Admin
  // const userData = { loginOrEmail: 'feonlinefinal@gmail.com', password: '11111111' };
  useEffect(() => {
    // dispatch(registeredUserLogin(userData));
    dispatch(fetchSliderItems());
    dispatch(setUpdatedCartItemsFromLocal());
    // dispatch(getCartItems());
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
