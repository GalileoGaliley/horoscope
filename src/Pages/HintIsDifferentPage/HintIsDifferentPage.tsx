import React from 'react';
import './HintIsDifferentPage.scss';
import {ArrowLink, Comet} from "../../assets/images/iconPack";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {HintIntro} from "../../utils/constants";

const HintIsDifferentPage = () => {
  const history = useHistory();
  const click = () => {
    history.push(HintIntro);
  }

  const backClick = () => {
    history.goBack();
  }
  return (
    <div className={'hint-is-different'}>
      <Comet />
      <h1 className={'hint-is-different__title'}>
        Great! But Hint is different.
      </h1>
      <h4 className={'hint-is-different__desc'}>
        Let us explain this better.
      </h4>
      <div className={'hint-is-different__button-container'}>
        <div onClick={backClick} className={'hint-is-different__back-button'}>
          <span className={'hint-is-different__back-icon'}>
            <ArrowLink fill={'#505051'} />
          </span>
          <p>Back</p>
        </div>
        <Button title={'Continue'} onClick={click} />
      </div>
    </div>
  );
};

export default HintIsDifferentPage;
