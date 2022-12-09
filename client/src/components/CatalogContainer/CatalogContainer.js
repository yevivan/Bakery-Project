import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
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
    <>
      <Filter />
      <CardList />
    </>
  );
}
export default CatalogContainer;
