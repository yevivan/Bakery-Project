import Button from '@mui/material/Button';
import styles from './ButtonComponent.module.scss';

function ButtonComponent(props) {
  const { text, type, onClick } = props;
  return (
    <Button
      type={type}
      className={styles.button}
      sx={{
        width: {
          xs: 100,
          sm: 100,
          md: 150,
          lg: 200,
          xl: 200,
        },
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
      onClick={onClick}

    >
      {text}

    </Button>
  );
}

export default ButtonComponent;
