import React, {useState} from 'react';
import './Payment.scss';
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {PayWall} from "../../utils/constants";
const PaymentPage = () => {
  const history = useHistory();
  const prices = ['1.00','2.50','5.63','8.69','13.00'];
  const [choosesPrice, setChoosesPrice] = useState(prices[prices.length - 1]);

  const click = () => {
    history.push(PayWall)
  }

  return (
    <div className={'payment'}>
      <h1 className={'payment__title'}>
        We've helped millions of people to have happier  relationships, and we want to help you too.
      </h1>
      <h1 className={'payment__sub-title'}>
        Money shouldn’t stand in the way of finding astrology guidance that finally works. So, choose an amount that you think is reasonable to try us out.
      </h1>
      <div className={'payment__price-container'}>
        {prices.map((item, index) => {
          return (
            <div onClick={() => {
              setChoosesPrice(item);
            }} className={`payment__price-item ${item === choosesPrice ? 'payment__price-item_active' : null}`}>
              ${item}
              {
                index === prices.length - 1 ?
                  (<span className={'payment__price-title'}>Most popular choice</span>)
                  : null
              }
            </div>
          )
        })}
      </div>
      <h1 className={'payment__title payment__title_blue'}>
        It costs us $13.21 to compensate our Hint employees for the trial,
        but please choose the amount you are comfortable with.
      </h1>
      <Button title={'Continue'} onClick={click} />
    </div>
  );
};

export default PaymentPage;
