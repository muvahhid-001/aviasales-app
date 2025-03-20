import './Tickets.scss';

const Tickets = () => {
  return (
    <ul className="section-ticket">
      <li className="section-ticket__title">
        <h3 className="section-ticket__price">13 400 Р</h3>
        <img className="section-ticket__img" src="./S7 Logo.png"></img>
      </li>
      <ul className="section-ticket__info">
        <li className="section-ticket__time">
          <p className="section-ticket__city">MOW - HKT</p>
          <p className="section-ticket__time-time">10:45 - 08:00</p>
          <p className="section-ticket__city">MOW - HKT</p>
          <p className="section-ticket__time-time">11:20 - 00:50</p>
        </li>
        <li className="section-ticket__path">
          <p className="section-ticket__path-way">В ПУТИ</p>
          <p className="section-ticket__path-time">21ч 15м</p>
          <p className="section-ticket__path-way">В ПУТИ</p>
          <p className="section-ticket__path-time">13ч 30м</p>
        </li>
        <li className="section-ticket__transfer">
          <p className="section-ticket__transfer-count">2 ПЕРЕСАДКИ</p>
          <p className="section-ticket__transfer-city">HKG, JNB</p>
          <p className="section-ticket__transfer-count">1 ПЕРЕСАДКА</p>
          <p className="section-ticket__transfer-city">HKG</p>
        </li>
      </ul>
    </ul>
  );
};

export default Tickets;
