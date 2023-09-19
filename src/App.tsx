import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./AppRouter";
import Header from "./components/Header/Header";

// @ts-ignore
import {store} from 'src/store';

import './App.css';
import {PayWall} from "./utils/constants";

function App() {
  const [loc, setLoc] = useState(false);

  useEffect(() => {
    setLoc(window.location.href.includes(PayWall));
  }, [window.location.href]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        {
          !loc
            ? <Header />
            : null
        }
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
