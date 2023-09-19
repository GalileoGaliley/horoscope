import React, {useState} from 'react';
import GoBack from "../../components/goBack/GoBack";
import {useHistory} from "react-router-dom";
import {DontKnowTimeOfBirth, SetYourTimeOfBirth} from "../../utils/constants";
import YesNoSelector from "../../components/YesNoSelector/YesNoSelector";

import './DoYouKnowTimeOfBirth.scss';

const DoYouKnowTimeOfBirth = () => {
  const history = useHistory();
  const [active, setActive] = useState<'Yes' | 'No' | null>(null);

  const change = (data: 'Yes' | 'No') => {
    setActive(data);
    if (data === 'Yes') {
      history.push(SetYourTimeOfBirth)
    }
    if (data === 'No') {
      history.push(DontKnowTimeOfBirth)
    }
  }

  return (
    <div className={'do-you-know-time-of-birth'}>
      <GoBack />
      <h1 className={'do-you-know-time-of-birth__title'}>Do you know your time of birth?</h1>
      <YesNoSelector active={active} change={change}/>
    </div>
  );
};

export default DoYouKnowTimeOfBirth;
