import React from 'react';
import {useHistory} from "react-router-dom";

import Button from "../../components/Button/Button";
import {Gender} from "../../utils/constants";

// @ts-ignore
import planets from 'src/assets/planets.gif';

import './EnterPage.scss';

const EnterPage = () => {
  const history = useHistory();

  return (
    <div className={'enter-page'}>
      <div className={'enter-page__container'}>
        <div className={'enter-page__image-container'}>
          <img src={planets} className={'enter-page__gif'} alt={'gif-planets'}/>
        </div>
        <h2 className={'enter-page__title'}>
          Test your compatibility in love
        </h2>
        <div className={'enter-page__rich-text'}>
          <p className={'enter-page__text'}>
            We've got all the intel on your relationships with romantic partners and crushes. Discover what you really need and learn how to strengthen your bond.
          </p>
          <p className={'enter-page__text'}>
            <u>But first - let's learn more about you!</u>
          </p>
        </div>
        <Button title={'Continue'} onClick={() => {
          history.push(Gender);
        }}/>
      </div>
    </div>
  );
};

export default EnterPage;
