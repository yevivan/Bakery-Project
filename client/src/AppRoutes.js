import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Catalog from './components/Pages/Catalog/Catalog';
import Basket from './components/Pages/Basket/Basket';
import CurrentProduct from './components/Pages/CurrentProduct/CurrentProduct';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:id" element={<CurrentProduct />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
}
export default AppRoutes;
