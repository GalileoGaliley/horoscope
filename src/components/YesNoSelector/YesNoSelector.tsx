import React from 'react';
import TileItem from "../tileSelector/TileItem";
import {AcceptIcon, DeclineIcon} from "../../assets/images/iconPack";

import './YesNoSelector.scss';

const YesNoSelector = ({active, change}: {active: 'Yes' | 'No' | null, change: (data: 'Yes' | 'No') => void}) => {
  return (
    <div className={'yes-no-selector__container'}>
      <TileItem
        onClick={() => {change('Yes')}}
        active={active === 'Yes'}
        title={'Yes'}
        Icon={() => <AcceptIcon />}
      />
      <TileItem
        onClick={() => {change('No')}}
        active={active === 'No'}
        title={'No'}
        Icon={() => <DeclineIcon />}
      />
    </div>
  );
};

export default YesNoSelector;
