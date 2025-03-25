import Ticket from '../Ticket/Ticket';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './Tickets.scss';

const Tickets = () => {
  const { tickets, raceSort, filterTransfer } = useSelector((store) => store);
  const [sortedTickets, setSortedTickets] = useState([]);
  const [visibleTickets, setVisibleTickets] = useState(5);

  useEffect(() => {
    if (!tickets || tickets.length === 0) return;

    let filteredTickets = [...tickets];

    if (!filterTransfer.all) {
      filteredTickets = filteredTickets.filter((ticket) => {
        const stops = ticket.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
        return (
          (filterTransfer.noTransfers && stops === 0) ||
          (filterTransfer.oneTransfers && stops === 1) ||
          (filterTransfer.twoTransfers && stops === 2) ||
          (filterTransfer.threeTransfers && stops === 3)
        );
      });
    }

    if (raceSort === 'CHEAPEST') {
      filteredTickets.sort((a, b) => a.price - b.price);
    } else if (raceSort === 'FAST') {
      filteredTickets.sort((a, b) => {
        const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
        const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0);
        return durationA - durationB;
      });
    } else if (raceSort === 'OPTIMAL') {
      filteredTickets.sort((a, b) => {
        const priceA = a.price;
        const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
        const stopsA = a.segments.reduce((acc, segment) => acc + segment.stops.length, 0);

        const priceB = b.price;
        const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0);
        const stopsB = b.segments.reduce((acc, segment) => acc + segment.stops.length, 0);

        return priceA + durationA + stopsA - (priceB + durationB + stopsB);
      });
    }

    setSortedTickets(filteredTickets.slice(0, visibleTickets));
  }, [tickets, raceSort, filterTransfer, visibleTickets]);

  const loadMoreTickets = () => {
    setVisibleTickets((prev) => prev + 5);
  };

  const noTicketsFound = sortedTickets.length === 0;

  return (
    <ul className="section-ticket">
      {noTicketsFound ? (
        <p className="no-tickets-message">Рейсов, подходящих под заданные фильтры, не найдено!</p>
      ) : (
        sortedTickets.map((item, index) => (
          <Ticket key={index} price={item.price} segments={item.segments} img={item.carrier} />
        ))
      )}
      {!noTicketsFound && (
        <button className="section__more-ticket" onClick={loadMoreTickets}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </ul>
  );
};

export default Tickets;
