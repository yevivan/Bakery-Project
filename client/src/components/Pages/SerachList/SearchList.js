import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import CardList from '../../CardList/CardList';
// import Search from '../../Search/Search';
// import styles from './SearchList.module.scss';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';
import { addSearch } from '../../../store/slices/searchSlices';
// import { fetchCatalog } from '../../../store/slices/catalogSlices';
// import ButtonComponent from '../../Button/ButtonComponent';
import SearchListContainer from '../../SerachListContainer/SerachListContainer';

function SearchList() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  dispatch(addSearch(query)); dispatch(closeMenuMobile(false));

  return (
    <SearchListContainer />
  );
}
export default SearchList;
