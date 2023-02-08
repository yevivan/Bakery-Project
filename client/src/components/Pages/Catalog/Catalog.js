import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import Search from '../../Search/Search';
// import CardList from '../../CardList/CardList';
// import Filter from '../../Filter/Filter';

// import { useEffect } from 'react';
import styles from './Catalog.module.scss';
import { addAllFilter } from '../../../store/slices/filterSlices';
import CatalogContainer from '../../CatalogContainer/CatalogContainer';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';
import { clearSearch } from '../../../store/slices/searchSlices';
import Pagin from '../../Pagination/Pagination';

function Catalog() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  //
  //   const categories = searchParams.get('categories');
  //   const chocolate = searchParams.get('chocolate');
  //   const sugar = searchParams.get('chocolate');
  //   const nuts = searchParams.get('nuts');
  //   const size = searchParams.get('size');
  //   const search = {
  //     categories: categories ? [categories] : [],
  //     chocolate: chocolate ? [chocolate] : [],
  //     sugar: sugar ? [sugar] : [],
  //     nuts: nuts ? [nuts] : [],
  //     size: size ? [size] : [],
  //   };

  const search = {
    categories: searchParams.getAll('categories'),
    chocolate: searchParams.getAll('chocolate'),
    sugar: searchParams.getAll('sugar'),
    nuts: searchParams.getAll('nuts'),
    size: searchParams.getAll('size'),
    perPage: searchParams.getAll('perPage'),
    startPage: searchParams.getAll('startPage'),
  };

  dispatch(addAllFilter(search));
  dispatch(clearSearch);
  dispatch(closeMenuMobile(false));

  return (
    <div className={styles.catalog}>
      <CatalogContainer />
      <Pagin />
    </div>

  );
}
export default Catalog;
