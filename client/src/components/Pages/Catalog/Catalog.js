/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Search from '../../Search/Search';
import CardList from '../../CardList/CardList';
import Filter from '../../Filter/Filter';

import styles from './Catalog.module.scss';
import { changeFilterCategory, clearFilter, addAllFilter } from '../../../store/slices/filterSlices';
import CatalogContainer from '../../CatalogContainer/CatalogContainer';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';
import { clearSearch } from '../../../store/slices/searchSlices';

function Catalog() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  // const categories = searchParams.get('categories');
  // dispatch(changeFilterCategory(categories))

  const categories = searchParams.get('categories');
  const chocolate = searchParams.get('chocolate');
  const sugar = searchParams.get('chocolate');
  const nuts = searchParams.get('nuts');
  const size = searchParams.get('size');
  const search = {
    categories: categories ? [categories] : [],
    chocolate: chocolate ? [chocolate] : [],
    sugar: sugar ? [sugar] : [],
    nuts: nuts ? [nuts] : [],
    size: size ? [size] : [],
  };
  dispatch(addAllFilter(search));

  // const search = searchParams.get('categories');
  // console.log(search)
  // dispatch(changeFilterCategory(search));
  // // dispatch(clearFilter);

  // dispatch(clearFilter);
  dispatch(clearSearch);
  dispatch(closeMenuMobile(false));

  return (
    <div className={styles.container}>
      <CatalogContainer />

    </div>
  );
}
export default Catalog;
