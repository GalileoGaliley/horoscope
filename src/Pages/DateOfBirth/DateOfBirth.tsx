import React, {useState} from 'react';

import {useHistory} from "react-router-dom";
import {DoYouKnowTimeOfBirth, localStorageItems} from "../../utils/constants";
import DateOfBirthComponent from "../../components/DateOfBirthComponent/DateOfBirthComponent";
import {pushToLocalStorage} from "../../utils/functions";

export const years = new Array(2099 - 1940).fill(0);
years.unshift('Year');

export const monthsAndDays: {[key: string]: number} = {
  'Month': 31,
  'January': 31,
  'February': 28,
  'March': 31,
  'April': 30,
  'May': 31,
  'June': 30,
  'July': 31,
  'August': 31,
  'September': 30,
  'October': 31,
  'November': 30,
  'December': 31,
};

const DateOfBirth = () => {
  const history = useHistory();
  const [year, setYear] = useState('Year');
  const [month, setMonth] = useState('Month');
  const [monthNumber, setMonthNumber] = useState(1);
  const [day, setDay] = useState('Day');
  const [daysData, setDaysData] = useState(monthsAndDays['Month']);

  const days = new Array(daysData).fill(0);
  days.unshift('Day');

  const changeYear = (K: string) => {
    setYear(K);
  }

  const changeMonth = (K: string) => {
    setDaysData(monthsAndDays[K]);
    setMonth(K);
    setMonthNumber(Object.keys(monthsAndDays).indexOf(K));
  }

  const changeDay = (K: string) => {
    setDay(K);
  }

  const click = () => {
    const data = {
      day: day,
      month: monthNumber,
      year: year
    }
    pushToLocalStorage({value: JSON.stringify(data), itemName: localStorageItems.DATE_OF_BIRTH});
    history.push(DoYouKnowTimeOfBirth);
  }

  return (
    <DateOfBirthComponent
      day={day}
      year={year}
      days={days}
      month={month}
      years={years}
      changeDay={changeDay}
      changeMonth={changeMonth}
      click={click}
      title={'What’s your date of birth?'}
      changeYear={changeYear}
    />
  );
};

export default DateOfBirth;
