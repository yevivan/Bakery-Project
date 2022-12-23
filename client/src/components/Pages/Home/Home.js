import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Grid from '../../Grid/Grid';
import Top from '../../Top/Top';
import Slider from '../../Slider/Slider';
import { fetchTop } from '../../../store/slices/topSlices';
import { fetchGrid } from '../../../store/slices/gridSlices';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTop());
    dispatch(fetchGrid());
  }, []);
  return (
    <>
      <Top />
      <Slider />
      <Grid />
    </>
  );
}
export default Home;
