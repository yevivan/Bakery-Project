import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormChangeData from '../FormChangeData/FormChangeData';
import Button from '../ButtonForSetting/ButtonForSetting';
import styles from '../AdminContainer/AdminContainer.module.scss';
import FormChangePass from '../FormChangePass/FormChangePass';

function AccountContainer() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(false);
  const [formPass, setFormPass] = useState(false);
  const [user, setUser] = useState({});
  console.log(user);
  function isFormData() { setFormData((prev) => !prev); }
  function isFormPass() { setFormPass((prev) => !prev); }
  function showDataAccount() {
    fetch(
      'http://127.0.0.1:5005/customers/customer',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: JSON.parse(localStorage.getItem('token')),
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className={styles.container}>
      <Button type="button" onClick={() => { dispatch(showDataAccount); dispatch(isFormData); }} props={formData ? <CloseIcon style={{ color: '#391113', fontSize: '25', fontWeight: '300' }} /> : 'Update Data'} />
      {formData && <FormChangeData user={user} />}
      <Button type="button" onClick={isFormPass} props={formPass ? <CloseIcon style={{ color: '#391113', fontSize: '25', fontWeight: '300' }} /> : 'Change Password'} />
      {formPass && <FormChangePass />}
    </div>
  );
}
export default AccountContainer;
