import React from 'react';

import './HintIntroPage.scss';

import {ArrowLink} from "../../assets/images/iconPack";
import Button from "../../components/Button/Button";
import {RelationshipStatus} from "../../utils/constants";
import {useHistory} from "react-router-dom";

const HintIntroPage = () => {
  const history = useHistory();

  const click = () => {
    history.push(RelationshipStatus);
  }

  const backClick = () => {
    history.goBack();
  }
  return (
    <div className={'hint-intro'}>
      <h1 className={'hint-intro__title'}>
        Hint compatibility is based on synastry charts. It’s different. And better.
      </h1>
      <h4 className={'hint-intro__desc'}>
        Why? Well, to start with, Synastry is the process of comparing your birth charts. We check the positions of the planets using NASA data, analyze what this means, and explain how you'll connect.
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

export default HintIntroPage;
