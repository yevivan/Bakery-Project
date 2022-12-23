import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import CardList from '../../CardList/CardList';
import Search from '../../Search/Search';
import styles from './SearchList.module.scss';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';
import { addSearch } from '../../../store/slices/searchSlices';
import { fetchCatalog } from '../../../store/slices/catalogSlices';
import ButtonComponent from '../../Button/ButtonComponent';

function SearchList() {
  const dispatch = useDispatch();
  // const search = useSelector((state) => state.search.search);
  // const [searchParams] = useSearchParams();
  // const query = searchParams.get('query');
  // dispatch(addSearch(query));
  // dispatch(fetchCatalog(search));
  // // useEffect(()=>{})

  // dispatch(fetchCatalog(search));
  dispatch(closeMenuMobile(false));
  return (
    <div className={styles.searchList}>
      <h2>SearchList</h2>
      <div className={styles.searchContainer}>
        <Search props={<ButtonComponent text="Search" style={{ height: '100%', width: '30%' }} />} />
      </div>

      <CardList />
    </div>
  );
}
export default SearchList;
