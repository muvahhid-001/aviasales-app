import PropTypes from 'prop-types';
import { parseISO, getHours, getMinutes } from 'date-fns';

const Ticket = ({ price = 0, segments = [], img = '' }) => {
  const data1 = parseISO(segments[0].date);
  const data2 = parseISO(segments[1].date);

  const hours1 = getHours(data1);
  const minutes1 = getMinutes(data1);
  const hours2 = getHours(data2);
  const minutes2 = getMinutes(data2);

  function convertTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  }

  function renderTransfers(stops) {
    const transfersCount = stops.length;
    if (transfersCount > 0) {
      const stopsList = stops.join(', ');
      return (
        <>
          <p className="section-ticket__transfer-count">{`${transfersCount} ${transfersCount === 1 ? 'ПЕРЕСАДКА' : 'ПЕРЕСАДКИ'}`}</p>
          <p className="section-ticket__transfer-city">{stopsList}</p>
        </>
      );
    }
    return (
      <>
        <p className="section-ticket__transfer-count">БЕЗ ПЕРЕСАДОК</p>
        <p className="section-ticket__transfer-city">-</p>
      </>
    );
  }

  return (
    <li className="section-ticket__card">
      <div className="section-ticket__title">
        <h3 className="section-ticket__price">{price.toLocaleString()}Р</h3>
        <img className="section-ticket__img" src={`https://pics.avs.io/110/36/${img}.png`} alt="Airline Logo" />
      </div>
      <ul className="section-ticket__info">
        <li className="section-ticket__time">
          <p className="section-ticket__city">
            {segments[0].origin} - {segments[0].destination}
          </p>
          <p className="section-ticket__time-time">{`${hours1}ч ${minutes1}м`}</p>
          <p className="section-ticket__city">
            {segments[1].origin} - {segments[1].destination}
          </p>
          <p className="section-ticket__time-time">{`${hours2}ч ${minutes2}м`}</p>
        </li>
        <li className="section-ticket__path">
          <p className="section-ticket__path-way">В ПУТИ</p>
          <p className="section-ticket__path-time">{convertTime(segments[0].duration)}</p>
          <p className="section-ticket__path-way">В ПУТИ</p>
          <p className="section-ticket__path-time">{convertTime(segments[1].duration)}</p>
        </li>
        <li className="section-ticket__transfer">
          {renderTransfers(segments[0].stops)}
          {renderTransfers(segments[1].stops)}
        </li>
      </ul>
    </li>
  );
};

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  segments: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
};

export default Ticket;
