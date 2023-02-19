import {
  Container, Pagination, Stack,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { changeStartPage } from '../../store/slices/filterSlices';
import style from './Pagination.module.scss';

function Pagin() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.catalog.pageQuantity);
  const showPage = useSelector((state) => state.filter.filter.startPage);

  const theme = createTheme({
    palette: { color: '#fa9bc9' },

  });
  return (

    <Container
      maxWidth="md"
      sx={{
        marginBlock: '15px',
      }}
    >
      <Stack>
        {!!(pages - 1) && (
        <ThemeProvider theme={theme}>
          <Pagination
            className={style.pag}
            variant="outlined"
            bgcolor="primary"
            count={pages}
            page={showPage}
            onChange={(e, num) => dispatch(changeStartPage(num))}
            // sx={{
            //   bgcolor: 'primary',
            //   color: '#391113',
            // }}
          />
        </ThemeProvider>
        )}
      </Stack>

    </Container>

  );
}
export default Pagin;
