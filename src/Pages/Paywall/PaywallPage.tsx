import React, {useEffect, useState} from 'react';
import './PaywallPage.scss';
import {Communication, Emotions, Intellect, Interest, Love, Sex} from "./presentationIconPack";
// @ts-ignore
import image from './Featured.png';
import Button from "../../components/Button/Button";
import {localStorageItems} from "../../utils/constants";
import {fetchCompability} from "../../services/fetchCompability";
const PaywallPage = () => {
  const email = 'ThePursuer@mail.ru';
  // @ts-ignore
  const [zodiac, setZodiac] = useState('');
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(15);

  const getZodiac = ({month, day}: {month: number, day: number}) => {
    console.log(month, day);
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return "Capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return "Aquarius";
    } else {
      return "Pisces";
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('userInfo');
    if (data && JSON.parse(data)[localStorageItems.DATE_OF_BIRTH]) {
      const date = JSON.parse(JSON.parse(data)[localStorageItems.DATE_OF_BIRTH]);
      if (date) {
        console.log(date);
        setZodiac(getZodiac({month: date.month, day: parseInt(date.day)}))
      }
    }
  }, []);

  useEffect(() => {
    if (minutes === 0 && seconds === 0){
      return
    }
    const counter =
      setTimeout(() => setSeconds(s => s - 1), 1000);
      if (seconds <= 0) {
        setMinutes(m => m - 1);
        setSeconds(59);
      }
    return () => clearInterval(counter);
  }, [seconds]);

  const click = () => {
    fetchCompability()
  }

  return (
    <div className={'paywall'}>
      <div className={'paywall__header'}>
        <h1 className={'paywall__header-email'}>
          {email}
        </h1>
      </div>
      <div className={'paywall__present-trial'}>
        <h1 className={'paywall__present-trial-title'}>
          Start Your 7-Day FREE Trial
        </h1>
      </div>
      <div className="rich-text" style={{paddingTop: '30px', paddingRight:'20px', paddingBottom:'30px', paddingLeft:'20px'}}>
        <h4>Hey
          <span> {zodiac}</span>,
        </h4>
        <h4>
          <br />
        </h4>
        <h4>Based
        on your answers and birth chart, we've created a personalized compatibility reading tailored just for you.
        </h4>
      </div>
      <div className={'paywall__presentation-container'}>
        <div className={'paywall__presentation'}>
          <h5 className={'paywall__presentation-title'}>
            PERSONALIZED OFFER RESERVED
          </h5>
          <h5 className={'paywall__presentation-desc'}>
            Your personalized offer has been saved for the next 15 minutes!
          </h5>
          <h5 className={'paywall__presentation-desc'}>
            Time remaining:
          </h5>
          <h5 className={'paywall__presentation-title'}>
            {minutes}:{seconds > 9 ? seconds : `0${seconds}`}
          </h5>
        </div>
      </div>
      <div className={'paywall__description'}>
        <h5 className={'paywall__description-title'}>
          Our in-depth analysis can reveal whether you two will harmonize or clash when it comes to:
        </h5>
        <div className={'paywall__description-list'}>
          <div className={'paywall__description-item'}>
            <Emotions />
            <span className={'paywall__description-item-title'}>
              Emotions
            </span>
          </div>
          <div className={'paywall__description-item'}>
            <Love />
            <span className={'paywall__description-item-title'}>
              Love
            </span>
          </div>
          <div className={'paywall__description-item'}>
            <Interest />
            <span className={'paywall__description-item-title'}>
              Interest
            </span>
          </div>
          <div className={'paywall__description-item'}>
            <Communication />
            <span className={'paywall__description-item-title'}>
              Communication
            </span>
          </div>
          <div className={'paywall__description-item'}>
            <Sex />
            <span className={'paywall__description-item-title'}>
              Sex
            </span>
          </div>
          <div className={'paywall__description-item'}>
            <Intellect />
            <span className={'paywall__description-item-title'}>
              Intellect
            </span>
          </div>
        </div>
        <div className={'paywall__line'}/>
        <div className={'paywall__featured'}>
          <h1 className={'paywall__featured-title'}>
            HINT HAS BEEN FEATURED IN
          </h1>
          <img className={'paywall__featured-image'} alt={''} src={image}/>
        </div>
        <div className={'paywall__line'}/>
        <div className={'paywall__button'}>
          <Button title={'Continue'} onClick={click} />
        </div>
        <div className={'paywall__line'}/>
      </div>
    </div>
  );
};

export default PaywallPage;
