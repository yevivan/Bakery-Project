import { useSelector } from 'react-redux';
import GridItem from '../GridItem/GridItem';
import styles from './Grid.module.scss';

function makeCounter() {
  let count = 0;
  return function () {
    if (count < 6) {
      count += 1;
      return count;
    }
    count = 1;
    return count;
  };
}
const number = makeCounter();

function Grid() {
  const dataArr = useSelector((store) => store.data.data);
  const data = dataArr.slice(0, 6);
  return (

    <div className={styles.container}>

      {data.map(({ category, picture, id }) => <GridItem background={`url(${picture})`} gridArea={`category${number()}`} category={category} id={id} />)}
    </div>

  );
}

export default Grid;
