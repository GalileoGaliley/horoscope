import React, {useState} from 'react';

import './CustomInput.scss'

interface OwnProps {
  data: string | number;
  setData: (K: any) => void;
  placeholder: string;
}
const CustomInput = ({placeholder, setData, data}: OwnProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={'custom-input'}>
      <h2 className={`
        custom-input__title ${focused ? 'custom-input__active' : ''}
        ${data && !focused ? 'custom-input__hidden' : ''}
      `}>
        {placeholder}
      </h2>
      <input
        data-initialized={true}
        onFocus={() => {
          setFocused(true)
        }}
        onBlur={() => {
          setFocused(false)
        }}
        className={`custom-input__input`}
        value={data ? data : ''}
        onChange={(e) => {
          setData(e.target.value);
        }}>
      </input>
    </div>
  );
};

export default CustomInput;
