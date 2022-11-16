import Filter from '../../Filter/Filter';
import CardList from '../../CardList/CardList';

function Catalog() {
//use search Params  чи э категорія, робим запит за цим фільтром
//     якщл нема, робимо запит на всі товари
  return (
    <div>
      <p>КATAЛОГ</p>
      <Filter />
      <CardList />
    </div>
  );
}
export default Catalog;
