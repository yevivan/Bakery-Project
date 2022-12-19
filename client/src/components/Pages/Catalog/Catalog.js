import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import Search from '../../Search/Search';
// import CardList from '../../CardList/CardList';
// import Filter from '../../Filter/Filter';


import styles from './Catalog.module.scss';
import { changeFilterCategory, clearFilter } from '../../../store/slices/filterSlices';
import CatalogContainer from '../../CatalogContainer/CatalogContainer';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';

function Catalog() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const search = searchParams.get('categories');
  dispatch(changeFilterCategory(search));
  dispatch(clearFilter);
  dispatch(closeMenuMobile(false));

  return (
    <div className={styles.container}>
      <CatalogContainer />

    </div>
  );
}
export default Catalog;
