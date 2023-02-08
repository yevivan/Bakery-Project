import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
// import TuneIcon from '@mui/icons-material/Tune';
import styles from './CatalogContainer.module.scss';
import Filter from '../Filter/Filter';
import CardList from '../CardList/CardList';
import { fetchCatalog } from '../../store/slices/catalogSlices';

function CatalogContainer() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter, shallowEqual);

  useEffect(() => {
    dispatch(fetchCatalog(filter));
  }, [filter]);
  return (
    <div className={styles.catalogContainer}>

      <Filter />
      <CardList />

    </div>
  );
}
export default CatalogContainer;
