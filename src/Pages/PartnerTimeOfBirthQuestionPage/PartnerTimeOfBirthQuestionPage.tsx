import React, {useState} from 'react';
import './PartnerTimeOfBirthQuestionPage.scss';
import {useHistory} from "react-router-dom";
import {PartnerDontKnowTimeOfBirth, PartnerTimeOfBirth} from "../../utils/constants";
import GoBack from "../../components/goBack/GoBack";
import YesNoSelector from "../../components/YesNoSelector/YesNoSelector";

const PartnerTimeOfBirthQuestionPage = () => {
  const history = useHistory();
  const [active, setActive] = useState<'Yes' | 'No' | null>(null);

  const change = (data: 'Yes' | 'No') => {
    setActive(data);
    if (data === 'Yes') {
      history.push(PartnerTimeOfBirth)
    }
    if (data === 'No') {
      history.push(PartnerDontKnowTimeOfBirth)
    }
  }

  return (
    <div className={'do-you-know-time-of-birth'}>
      <GoBack />
      <h1 className={'do-you-know-time-of-birth__title'}>Do you know their time of birth?</h1>
      <YesNoSelector active={active} change={change}/>
    </div>
  );
};

export default PartnerTimeOfBirthQuestionPage;
