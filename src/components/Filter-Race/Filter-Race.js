import { useDispatch, useSelector } from 'react-redux';
import { cheapest, fast, optimal } from '../Actions/Actions';
import './Filter-Race.scss';

const FilterRace = () => {
  const filterRace = useSelector((state) => state.raceSort);
  const dispatch = useDispatch();

  return (
    <div className="section__filter">
      <button
        className={`section__filter__button ${filterRace === 'CHEAPEST' ? 'active-button' : null}`}
        onClick={() => dispatch(cheapest())}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`section__filter__button ${filterRace === 'FAST' ? 'active-button' : null}`}
        onClick={() => dispatch(fast())}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`section__filter__button ${filterRace === 'OPTIMAL' ? 'active-button' : null}`}
        onClick={() => dispatch(optimal())}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default FilterRace;
