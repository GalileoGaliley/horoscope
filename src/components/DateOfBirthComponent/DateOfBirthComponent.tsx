import React from 'react';
import GoBack from "../goBack/GoBack";
import CustomSelector from "../input/CustomSelector";
import Button from "../Button/Button";
import {monthsAndDays} from "../../Pages/DateOfBirth/DateOfBirth";
import './DateOfBirth.scss';

const DateOfBirthComponent = (
  {
    month,
    day,
    year,
    years,
    days,
    click,
    changeMonth,
    changeYear,
    changeDay,
    title,
  }: {
    title: string,
    month: string,
    year: string,
    day: string,
    years: number[],
    days: number[],
    click: () => void,
    changeMonth: (K: string) => void,
    changeYear: (K: string) => void,
    changeDay: (K: string) => void
  }) => {

  const disabledButton = year === 'Year' || day === 'Day' || month === 'Month'

  return (
    <div className={'date-of-birth'}>
      <GoBack />
      <h1 className={'date-of-birth__title'}>{title}</h1>
      <CustomSelector data={Object.keys(monthsAndDays)} placeholder={'Month'} value={month} setData={changeMonth} />
      <CustomSelector data={years} placeholder={'Year'} transform={1940} value={year} setData={changeYear} />
      <CustomSelector data={days} placeholder={'Day'} transform={0} value={day} setData={changeDay} />
      <Button disabled={disabledButton} title={'Continue'} onClick={click} />
    </div>
  );
};

export default DateOfBirthComponent;
