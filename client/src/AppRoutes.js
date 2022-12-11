import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Catalog from './components/Pages/Catalog/Catalog';
import Basket from './components/Pages/Basket/Basket';
import Account from './components/Pages/Account/Account';
import CurrentProduct from './components/Pages/CurrentProduct/CurrentProduct';
import SearchList from './components/Pages/SerachList/SearchList';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/search" element={<SearchList />} />
      <Route path="/products/:id" element={<CurrentProduct />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}
export default AppRoutes;
