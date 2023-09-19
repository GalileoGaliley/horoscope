import React from 'react';

// @ts-ignore
import logo from 'src/assets/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className={'header__container'}>
      <img src={logo} className={'header__image'} alt={'image'} />
      <div className={'header__progress-bar'}>
        <div className={'header__progress'}>

        </div>
      </div>
    </div>
  );
};

export default Header;
