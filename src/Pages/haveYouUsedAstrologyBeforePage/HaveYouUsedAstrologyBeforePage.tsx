import React, {useState} from 'react';
import './HaveYouUsedAstrologyBeforePage.scss';
import GoBack from "../../components/goBack/GoBack";
import YesNoSelector from "../../components/YesNoSelector/YesNoSelector";
import {HintIsDifferent} from "../../utils/constants";
import {useHistory} from "react-router-dom";

const HaveYouUsedAstrologyBeforePage = () => {
  const history = useHistory();

  const [active, setActive] = useState<'Yes' | 'No' | null>(null);

  const change = (data: 'Yes' | 'No') => {
    setActive(data);
    if (data === 'Yes') {
      history.push(HintIsDifferent)
    }
    if (data === 'No') {
      history.push(HintIsDifferent)
    }
  }
  return (
    <div className={'have-you-used-astrology-before'}>
      <GoBack />
      <h1 className={'have-you-used-astrology-before__title'}>
        Have you used other services to get insights into your love compatibility before?
      </h1>
      <YesNoSelector active={active} change={change}/>
    </div>
  );
};

export default HaveYouUsedAstrologyBeforePage;
