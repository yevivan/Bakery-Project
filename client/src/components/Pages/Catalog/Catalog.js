import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './Catalog.module.scss';
import { changeFilterCategory, clearFilter } from '../../../store/slices/filterSlices';
import CatalogContainer from '../../CatalogContainer/CatalogContainer';

function Catalog() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const search = searchParams.get('categories');
  dispatch(changeFilterCategory(search));
  dispatch(clearFilter);

  return (
    <div className={styles.container}>
      <CatalogContainer />

    </div>
  );
}
export default Catalog;
