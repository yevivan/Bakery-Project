import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
// import styles from '../FormAddProduct/FormAddProduct.module.scss';
import style from './ContainerUpdateProduct.module.scss';
import FormUpdateProduct from '../FormUpdateProduct/FormUpdateProduct';
import Button from '../ButtonForSetting/ButtonForSetting';

function ContainerUpdateProduct() {
  const [searchValue, setSearchValue] = useState('');
  const [isForm, setIsForm] = useState(false);
  const [dataItem, setDataItem] = useState({});
  // const dispatch = useDispatch();
  const [isSearch, setSearch] = useState(false);
  function showForm() { setSearch((prev) => !prev); }
  function handleSubmit(e) {
    e.preventDefault();
    const itemNo = e.target.search.value;
    if (itemNo.length === 6) {
      console.log(itemNo);
      fetch(`http://127.0.0.1:5005/products/${itemNo}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDataItem(data);
          setIsForm(true);
        })
        .catch((err) => console.error(err));
    }
  }

  return (

    <>
      <Button onClick={showForm} props={isSearch ? <CloseIcon style={{ color: '#391113', fontSize: '25', fontWeight: '300' }} /> : 'Update Product'} />
      <div className={style.container} style={isSearch ? { display: 'flex' } : { display: 'none' }}>
        <p className={style.text}>STEP 1 - choose product by ItemNo</p>
        <form className={style.searchForm} onSubmit={handleSubmit}>
          <label htmlFor="search" className={style.searchLabel}>
            <input className={style.searchInput} type="search" name="search" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="itemNo" />
          </label>
          <button type="submit" className={style.searchBtn}>Search</button>
        </form>
        {isForm
            && (
            <>
              <p className={style.text}>STEP 2 - check product`s data and update</p>
              <FormUpdateProduct dataItem={dataItem} />
            </>
            )}

      </div>
    </>
  );
}
export default ContainerUpdateProduct;
