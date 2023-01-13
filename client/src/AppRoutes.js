import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Catalog from './components/Pages/Catalog/Catalog';
import Basket from './components/Pages/Basket/Basket';
import Login from './components/Pages/Login/Login';
import CurrentProduct from './components/Pages/CurrentProduct/CurrentProduct';
import SearchList from './components/Pages/SerachList/SearchList';
import Registration from './components/Pages/Registration/Registration';
import Account from './components/Pages/Account/Account';
import Admin from './components/Pages/Admin/Admin';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/search" element={<SearchList />} />
      <Route path="/products/:id" element={<CurrentProduct />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/account" element={<Account />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
export default AppRoutes;
