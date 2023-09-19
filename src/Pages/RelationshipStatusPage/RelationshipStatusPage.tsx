import React, {useState} from 'react';
import GoBack from "../../components/goBack/GoBack";
import TileItem from "../../components/tileSelector/TileItem";
import {Crush, Partner} from "../../assets/images/iconPack";
import {useHistory} from "react-router-dom";
import {localStorageItems, PartnerDateOfBirth} from "../../utils/constants";

import './RelationshipStatusPage.scss';
import {pushToLocalStorage} from "../../utils/functions";

const RelationshipStatusPage = () => {
  const history = useHistory();

  const [active, setActive] = useState<'crush' | 'partner' | null>(null);

  const changeStatus = (data: 'crush' | 'partner') => {
    setActive(data);
    pushToLocalStorage({value: data, itemName: localStorageItems.RELATIONSHIP_STATUS});
    history.push(PartnerDateOfBirth);
  }

  return (
    <div className={'relationship-status-page'}>
      <GoBack />
      <h1 className={'gender__title'}>Who do you want to check your compatibility with? </h1>
      <div className={'gender__container'}>
        <TileItem
          onClick={() => {changeStatus("crush")}}
          active={active === 'crush'}
          title={'Your Crush'}
          Icon={() => <Crush />}
        />
        <TileItem
          onClick={() => {changeStatus("partner")}}
          active={active === 'partner'}
          title={'Your Partner'}
          Icon={() => <Partner />}
        />
      </div>
    </div>
  )
};

export default RelationshipStatusPage;
