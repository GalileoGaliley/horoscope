import React, {useState} from 'react';
import './SetYourTimeOfBirthPage.scss';
import {useHistory} from "react-router-dom";
import {CityOfBirth, localStorageItems} from "../../utils/constants";
import TimeOfBirth from "../../components/TimeOfBirthComponent/TimeOfBirth";
import {pushToLocalStorage} from "../../utils/functions";

const SetYourTimeOfBirthPage = () => {
  const [hour, setHour] = useState<number | string>('');
  const [minutes, setMinutes] = useState<number | string>('');
  const [timeFormat, setTimeFormat] = useState<'AM' | 'PM' | ''>('');
  const history = useHistory();

  const click = () => {
    const h = parseInt(`${hour}`);
    const m = minutes >= 10 ? minutes : `0${minutes}`
    const data = `${timeFormat === 'AM' ? h : h + 12}:${m}`;
    pushToLocalStorage({value: data, itemName: localStorageItems.TIME_OF_BIRTH});
    history.push(CityOfBirth);
  }

  const changeHour = (value: string) => {
    const newValue = parseInt(value);
    if (newValue <= 12 && newValue > 0) {
      setHour(parseInt(value));
    }
    if (value.length === 0) {
      setHour('');
    }
  }

  const changeMinutes = (value: string) => {
    const newValue = parseInt(value);
    console.log(newValue);
    if (newValue <= 59 && newValue > 0) {
      setMinutes(parseInt(value));
    }
    if (value.length === 0) {
      setMinutes('');
    }
  }
  return (
    <TimeOfBirth
      hour={hour}
      changeHour={changeHour}
      minutes={minutes}
      changeMinutes={changeMinutes}
      setTimeFormat={setTimeFormat}
      timeFormat={timeFormat}
      click={click}
      title={'What time were you born?'}
    />
  );
};

export default SetYourTimeOfBirthPage;
