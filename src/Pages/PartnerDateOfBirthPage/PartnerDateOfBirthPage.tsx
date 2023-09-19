import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {localStorageItems, PartnerTimeOfBirthQuestion} from "../../utils/constants";
import DateOfBirthComponent from "../../components/DateOfBirthComponent/DateOfBirthComponent";
import {monthsAndDays, years} from "../DateOfBirth/DateOfBirth";
import {pushToLocalStorage} from "../../utils/functions";

const PartnerDateOfBirthPage = () => {

  const history = useHistory();

  const [year, setYear] = useState('Year');
  const [month, setMonth] = useState('Month');
  const [monthNumber, setMonthNumber] = useState(0);
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
    setMonthNumber(Object.keys(monthsAndDays).indexOf(K) + 1);
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
    pushToLocalStorage({value: JSON.stringify(data), itemName: localStorageItems.PARTNER_DATE_OF_BIRTH});
    history.push(PartnerTimeOfBirthQuestion);
  }


  return (
    <DateOfBirthComponent
      day={day}
      year={year}
      days={days}
      month={month}
      years={years}
      changeDay={changeDay}
      title={'What’s their date of birth?'}
      changeMonth={changeMonth}
      click={click}
      changeYear={changeYear}
    />
  );
};

export default PartnerDateOfBirthPage;
