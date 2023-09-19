import React from 'react';
import {useHistory} from "react-router-dom";
import {ArrowLink} from "../../assets/images/iconPack";

import './GoBack.scss';

const GoBack = () => {
  const history = useHistory();
  return (
    <div className={'go-back'}>
      <div onClick={() => history.goBack()} className={'go-back__button-container'}>
        <ArrowLink opacity={'0'} secondaryFill={'#505051'} fill={'#505051'} />
      </div>
    </div>
  );
};

export default GoBack;
