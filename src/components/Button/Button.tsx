import React from 'react';

import './Button.scss';
import {ArrowLink} from "../../assets/images/iconPack";

interface OwnProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({title, onClick, disabled = false}: OwnProps) => {
  const click = () => {
    if (!disabled) {
      onClick();
    }
  }

  return (
    <div className={`button ${disabled ? 'button__disabled' : 'button__enabled'}`} onClick={click}>
      <div className={'button__title'}>
        {title}
      </div>
      <ArrowLink />
    </div>
  );
};

export default Button;
