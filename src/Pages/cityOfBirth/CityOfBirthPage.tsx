import React, {useState} from 'react';
import GoBack from "../../components/goBack/GoBack";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import './CityOfBirthPage.scss';
import CustomInput from "../../components/input/CustomInput";
import axios from "axios";
import {HaveYouUsedAstrologyBefore, localStorageItems} from "../../utils/constants";
import {pushToLocalStorage} from "../../utils/functions";

const CityOfBirthPage = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const history = useHistory();

  const changeCity = (value: string) => {
    setCity(value);
    dadata(value);
  }

  const click = () => {
    pushToLocalStorage({value: city, itemName: localStorageItems.CITY_OF_BIRTH});
    history.push(HaveYouUsedAstrologyBefore)
  }

  const dadata = async (K: string) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "d8dfbebbee14478cd5328086951a7d38b3aaec9d";

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
    }

    try {
      const place = await axios.post(url, {
        query: K,
        locations: [
          {country: '*'}
        ],
        language: 'en'
      }, options)
      setCities(place.data.suggestions);
    } catch (e) {
      console.log(e);
    }
  }

  const disabledButton = !city
  return (
    <div className={'city-of-birth'}>
      <GoBack />
      <h1 className={'city-of-birth__title'}>
        Where were you born?
      </h1>
      <h4 className={'city-of-birth__desc'}>
        This determines the time zone at your place of birth to improve the accuracy of your compatibility.
      </h4>
      <div className={'city-of-birth__input-container'}>
        <CustomInput data={city} setData={changeCity} placeholder={'Place of birth'} />
        <div className={`city-of-birth__popup ${cities.length ? 'city-of-birth__popup_active' : ''}`}>
          {cities.map((item: {value: string}) => {
            return <div onClick={() => {
              setCity(item.value);
              setCities([]);
            }
            } className={'city-of-birth__popup-item'}>{item?.value}</div>
          })}
        </div>
      </div>
      <Button disabled={disabledButton} title={'Continue'} onClick={click} />
    </div>
  );
};

export default CityOfBirthPage;
