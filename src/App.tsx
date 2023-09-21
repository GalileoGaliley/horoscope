import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./AppRouter";
import Header from "./components/Header/Header";

import './App.css';
import {PayWall} from "./utils/constants";

function App() {
  const [loc, setLoc] = useState(false);

  useEffect(() => {
    setLoc(window.location.href.includes(PayWall));
  }, [window.location.href]);
  return (
      <BrowserRouter>
        {
          !loc
            ? <Header />
            : null
        }
        <AppRouter />
      </BrowserRouter>
  );
}

export default App;
