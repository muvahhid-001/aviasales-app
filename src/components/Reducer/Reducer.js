const initialState = {
  raceSort: 'CHEAPEST',
  filterTransfer: { all: false, noTransfers: false, oneTransfers: false, twoTransfers: false, threeTransfers: false },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAPEST':
      return { ...state, raceSort: 'CHEAPEST' };
    case 'FAST':
      return { ...state, raceSort: 'FAST' };
    case 'OPTIMAL':
      return { ...state, raceSort: 'OPTIMAL' };
    case 'ALL':
      return {
        ...state,
        filterTransfer: {
          all: true,
          noTransfers: true,
          oneTransfers: true,
          twoTransfers: true,
          threeTransfers: true,
        },
      };
    case 'OFF':
      return {
        ...state,
        filterTransfer: {
          all: false,
          noTransfers: false,
          oneTransfers: false,
          twoTransfers: false,
          threeTransfers: false,
        },
      };
    case 'NOTRANSFERS': {
      const newNoTransfers = !state.filterTransfer.noTransfers;
      const newFT = {
        ...state.filterTransfer,
        noTransfers: newNoTransfers,
      };
      newFT.all = newFT.noTransfers && newFT.oneTransfers && newFT.twoTransfers && newFT.threeTransfers;
      return { ...state, filterTransfer: newFT };
    }
    case 'ONETRANSFERS': {
      const newOneTransfers = !state.filterTransfer.oneTransfers;
      const newFT = {
        ...state.filterTransfer,
        oneTransfers: newOneTransfers,
      };
      newFT.all = newFT.noTransfers && newFT.oneTransfers && newFT.twoTransfers && newFT.threeTransfers;
      return { ...state, filterTransfer: newFT };
    }
    case 'TWOTRANSFERS': {
      const newTwoTransfers = !state.filterTransfer.twoTransfers;
      const newFT = {
        ...state.filterTransfer,
        twoTransfers: newTwoTransfers,
      };
      newFT.all = newFT.noTransfers && newFT.oneTransfers && newFT.twoTransfers && newFT.threeTransfers;
      return { ...state, filterTransfer: newFT };
    }
    case 'THREETRANSFERS': {
      const newThreeTransfers = !state.filterTransfer.threeTransfers;
      const newFT = {
        ...state.filterTransfer,
        threeTransfers: newThreeTransfers,
      };
      newFT.all = newFT.noTransfers && newFT.oneTransfers && newFT.twoTransfers && newFT.threeTransfers;
      return { ...state, filterTransfer: newFT };
    }
    default:
      return state;
  }
};

export default reducer;
