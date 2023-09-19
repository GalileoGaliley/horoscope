import React from 'react';
import GoBack from "../../components/goBack/GoBack";
// @ts-ignore
import './DontKnowTimeOfBirth.scss';
import {Clock} from "../../assets/images/iconPack";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {CityOfBirth} from "../../utils/constants";

const DontKnowTimeOfBirthPage = () => {
  const history = useHistory();
  const click = () => {
    history.push(CityOfBirth);
  }
  return (
    <div className={'dont-know-time-of-birth-page'}>
      <GoBack />
      <Clock />
      <h1 className={'dont-know-time-of-birth-page__title'}>
        No problem! You will still find plenty of great insights without knowing your exact birth time.
      </h1>
      <Button title={'Continue'} onClick={click} />
    </div>
  );
};

export default DontKnowTimeOfBirthPage;
