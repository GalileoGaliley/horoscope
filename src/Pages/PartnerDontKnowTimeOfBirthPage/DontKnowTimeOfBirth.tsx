import React from 'react';
import GoBack from "../../components/goBack/GoBack";
// @ts-ignore
import './DontKnowTimeOfBirth.scss';
import {Clock} from "../../assets/images/iconPack";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {PartnerPlaceOfBirth} from "../../utils/constants";

const DontKnowTimeOfBirthPage = () => {
  const history = useHistory();
  const click = () => {
    history.push(PartnerPlaceOfBirth);
  }
  return (
    <div className={'dont-know-time-of-birth-page'}>
      <GoBack />
      <Clock />
      <h1 className={'dont-know-time-of-birth-page__title'}>
        No problem! Same as with your personal time of birth you can still find plenty of great insights without knowing their exact birth time.
      </h1>
      <Button title={'Continue'} onClick={click} />
    </div>
  );
};

export default DontKnowTimeOfBirthPage;
