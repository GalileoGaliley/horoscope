import React, {useState} from 'react';
import './Email.scss'
import CustomInput from "../../components/input/CustomInput";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {ChoosePrice, localStorageItems} from "../../utils/constants";
import {pushToLocalStorage} from "../../utils/functions";

const EmailPage = () => {

  const [email, setEmail] = useState('');

  const history = useHistory();
  const click = ()=> {
    pushToLocalStorage({value: email, itemName: localStorageItems.EMAIL});
    history.push(ChoosePrice);
  }

  return (
    <div className={'email'}>
      <h1 className={'email__title'}>
        Enter your email to get your hyper-personalized compatibility reading with Hint
      </h1>
      <div className={'email__input-container'}>
        <div className={'email__input-icon'}>
          <span className="material-symbols-outlined">mail_outline</span>
        </div>
        <CustomInput data={email} setData={setEmail} placeholder={'Email address'} />
      </div>
      <span className={'email__desc'}>
        We don't share any personal information. We'll email you a copy of your compatibility reading for convenient access.
      </span>
      <Button disabled={!email.includes('@')} title={'Continue'} onClick={click} />
    </div>
  );
};

export default EmailPage;
