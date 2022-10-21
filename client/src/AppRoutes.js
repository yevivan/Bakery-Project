import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Catalog from './components/Pages/Catalog/Catalog';
import Basket from './components/Pages/Basket/Basket';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/category1" element={<Catalog />} />
      <Route path="/catalog/category2" element={<Catalog />} />
      <Route path="/catalog/category3" element={<Catalog />} />
      <Route path="/catalog/category4" element={<Catalog />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
}
export default AppRoutes;
