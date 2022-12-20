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
  const data = useSelector((store) => store.grid.grid);
  // const data = dataArr.slice(0, 6);
  return (

    <div className={styles.container}>

      {data.map(({
        name, image, _id, itemNo,
      }) => <GridItem backgroundImage={`url(${image})`} gridArea={`category${number()}`} name={name} id={itemNo} key={_id} />)}

    </div>

  );
}

export default Grid;
