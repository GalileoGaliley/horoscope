import React, {useEffect, useState} from 'react';

import './Scanner.scss';
import {Scanner} from "../../assets/images/iconPack";
import {useHistory} from "react-router-dom";
import {Email} from "../../utils/constants";
const ScannerPage = () => {
  const [progress, setProgress] = useState(0);

  const history = useHistory();

  const arr = new Array(10).fill(0);

  useEffect(() => {
    arr.map((item, index) => {
      console.log(item);
      setTimeout(() => {
        setProgress(index * 10 + Math.floor(Math.random() * 4))
        if (index === arr.length - 1) {
          setProgress(100);
          setTimeout(() => history.push(Email), 1000)
        }
      }, index * 1500);
    })
  }, []);


  return (
    <div className={'scanner'}>
      <p className={'scanner__title'}>
        Hint has provided essential compatibility insight into over 544 930* other Capricorn and @their_zodiac connections.
      </p>
      <div className={'scanner__image'}>
        <Scanner />
      </div>
      <div className={'scanner__loader-container'}>
        <div style={{width: `${progress}%`}} className={'scanner__progress'} />
        <span className={'scanner__progress-number'}>
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ScannerPage;
