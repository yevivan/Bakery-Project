import style from './ButtonForSetting.module.scss';

function ButtonForSetting({ onClick, props }) {
  return (
    <button className={style.btn} type="button" onClick={onClick}>{props}</button>
  );
}
export default ButtonForSetting;
