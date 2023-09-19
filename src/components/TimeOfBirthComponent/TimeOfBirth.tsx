import React from 'react';
import GoBack from "../goBack/GoBack";
import CustomInput from "../input/CustomInput";
import Button from "../Button/Button";

const TimeOfBirth = ({hour, title, setTimeFormat, timeFormat, changeHour, changeMinutes, minutes, click}:
  {
    hour: string | number,
    changeHour: (K: string) => void,
    minutes: string | number,
    changeMinutes: (K: string) => void,
    setTimeFormat: (K: 'AM' | 'PM') => void,
    timeFormat: 'AM' | 'PM' | '',
    click: () => void,
    title: string,
  }
  ) => {
  const disabledButton = !hour || !minutes || !timeFormat;

  return (
    <div className={'set-your-time-of-birth'}>
      <GoBack />
      <h1 className={'set-your-time-of-birth__title'}>{title}</h1>
      <div className={'set-your-time-of-birth__input-container'}>
        <CustomInput data={hour} setData={changeHour} placeholder={'HH'} />
        <CustomInput data={minutes} setData={changeMinutes} placeholder={'MM'} />
        <div className={'set-your-time-of-birth__time-container'}>
          <div onClick={() => setTimeFormat('AM')} className={`
            set-your-time-of-birth__time-item 
            ${timeFormat === 'AM' ? 'set-your-time-of-birth__time-item_active' : ''}
          `}>
            AM
          </div>
          <div onClick={() => setTimeFormat('PM')} className={`
            set-your-time-of-birth__time-item 
            ${timeFormat === 'PM' ? 'set-your-time-of-birth__time-item_active' : ''}
          `}>
            PM
          </div>
        </div>
      </div>
      <Button disabled={disabledButton} title={'Continue'} onClick={click} />
    </div>
  );
};

export default TimeOfBirth;
