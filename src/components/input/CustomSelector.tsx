import React, {useState} from 'react';
import './CustomSelector.scss'

interface OwnProps {
  value: string;
  data: any[];
  setData: (K: string) => void;
  placeholder: string;
  transform?: number;
}

const CustomSelector = ({value, data, placeholder, setData, transform = 0}: OwnProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={'custom-selector'}>
      <h2 className={`custom-selector__title ${selected ? 'custom-selector__active' : ''}`}>
        {placeholder}
      </h2>
      <select
        data-initialized={true}
        className={`custom-selector__selector ${value === placeholder ? 'custom-selector__hidden' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setData(e.target.value);
          setSelected(true);
        }}>
        <option disabled={true} className={'custom-selector__hidden'}></option>
        {data.map((item, index) => {
          return (
            <option
              disabled={index === 0}
              value={item ? item : index + transform}>
              {item ? item : index + transform}
            </option>
          )
        })}

      </select>
    </div>
  );
};

export default CustomSelector;
