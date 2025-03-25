import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterTransfer from '../Filter-Transfer/Filter-Trancfer';
import FilterRace from '../Filter-Race/Filter-Race';
import Tickets from '../Tickets/Tickets';
import { Spin } from 'antd';
import { getId, getTickets } from '../Actions/Actions';
import './App.scss';
import './Media.scss';

const App = () => {
  const dispatch = useDispatch();
  const { id, tickets, btStatus } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getId());
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getTickets(id));
    }
  }, [id, dispatch]);

  return (
    <React.Fragment>
      <div
        className={`spider-man ${btStatus === true ? null : 'none'}`}
        onClick={() => {
          dispatch({ type: 'BURGER' });
        }}
      ></div>
      <header>
        <img className="header__logo" src="./Logo.png" alt="Логотип" />
      </header>
      <main>
        <FilterTransfer />
        <button
          className="burger"
          onClick={() => {
            dispatch({ type: 'BURGER' });
          }}
        >
          |||
        </button>
        <div className="section">
          <FilterRace />
          {tickets === undefined ? <Spin /> : <Tickets tickets={tickets} />}
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
