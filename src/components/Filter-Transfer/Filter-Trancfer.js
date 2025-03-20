import { useDispatch, useSelector } from 'react-redux';
import './Filter-Transfer.scss';
import { all, off, noTransfers, oneTransfers, twoTransfers, threeTransfers } from '../Actions/Actions';

const FilterTransfer = () => {
  const { filterTransfer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAllChange = (e) => {
    if (e.target.checked) {
      dispatch(all());
    } else {
      dispatch(off());
    }
  };

  return (
    <div className="filter-transfer">
      <ul className="filter-transfer__list-filter">
        <p className="filter-transfer__list-filter-title">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <li className="filter-transfer__list-filter__list-li">
          <input type="checkbox" id="all-checkbox" checked={filterTransfer.all} onChange={handleAllChange} />
          <label htmlFor="all-checkbox" className="filter-transfer__list-label">
            Все
          </label>
        </li>
        <li className="filter-transfer__list-filter__list-li">
          <input
            type="checkbox"
            id="checkbox-1"
            checked={filterTransfer.noTransfers}
            onChange={() => dispatch(noTransfers())}
          />
          <label htmlFor="checkbox-1" className="filter-transfer__list-label">
            Без пересадок
          </label>
        </li>
        <li className="filter-transfer__list-filter__list-li">
          <input
            type="checkbox"
            id="checkbox-2"
            checked={filterTransfer.oneTransfers}
            onChange={() => dispatch(oneTransfers())}
          />
          <label htmlFor="checkbox-2" className="filter-transfer__list-label">
            1 пересадка
          </label>
        </li>
        <li className="filter-transfer__list-filter__list-li">
          <input
            type="checkbox"
            id="checkbox-3"
            checked={filterTransfer.twoTransfers}
            onChange={() => dispatch(twoTransfers())}
          />
          <label htmlFor="checkbox-3" className="filter-transfer__list-label">
            2 пересадки
          </label>
        </li>
        <li className="filter-transfer__list-filter__list-li">
          <input
            type="checkbox"
            id="checkbox-4"
            checked={filterTransfer.threeTransfers}
            onChange={() => dispatch(threeTransfers())}
          />
          <label htmlFor="checkbox-4" className="filter-transfer__list-label">
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default FilterTransfer;
