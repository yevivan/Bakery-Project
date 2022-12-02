import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Filter from '../../Filter/Filter';
import CardList from '../../CardList/CardList';

import styles from './Catalog.module.scss';
import { changeFilterCategory } from '../../../store/slices/filterSlices';

function Catalog() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const search = searchParams.get('categories');
  dispatch(changeFilterCategory(search));

  return (
    <div className={styles.container}>
      <Filter />
      <CardList />
    </div>
  );
}
export default Catalog;
