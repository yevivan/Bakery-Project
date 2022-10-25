import Button from '@mui/material/Button';
import styles from './ButtonComponent.module.scss';

function ButtonComponent() {
  return (
    <Button
      className={styles.button}
      sx={{
        width: 120,
        fontFamily: 'Barlow Condensed',
        fontSize: 23,
        fontWeight: 200,
        color: '#f09ec4',
        backgroundColor: '#391113',
        borderRadius: 0,
        textTransform: 'none',
        padding: 0,
      }}
      variant="contained"
    >
      Shop Now

    </Button>
  );
}

export default ButtonComponent;
