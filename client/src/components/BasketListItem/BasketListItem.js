import Grid from '@mui/material/Grid';
import { SvgIcon } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function BasketListItem(props) {
  const { item } = props;
  const { name, price, picture } = item;

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <SvgIcon fontSize="medium">
          <ClearIcon />
        </SvgIcon>
        <img src={picture} alt="sweets" width="130px" />
        <span>{name}</span>
      </Grid>
      <Grid item xs={2}>
        <span>{price}</span>
      </Grid>
      <Grid item xs={2}>
        <span>1</span>
      </Grid>
      <Grid item xs={2}>
        <span>{price}</span>
      </Grid>
    </Grid>
  );
}
export default BasketListItem;
