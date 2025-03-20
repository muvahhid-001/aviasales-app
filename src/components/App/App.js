import React from 'react';
import FilterTransfer from '../Filter-Transfer/Filter-Trancfer';
import FilterRace from '../Filter-Race/Filter-Race';
import Ticket from '../Tickets/Tickets';
import store from '../Store/Store';
import './App.scss';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <header>
          <img className="header__logo" src="./Logo.png"></img>
        </header>
        <main>
          <FilterTransfer />
          <div className="section">
            <FilterRace />
            <Ticket />
            <button className="section-ticket__more-ticket">ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
          </div>
        </main>
      </React.Fragment>
    </Provider>
  );
};

export default App;
