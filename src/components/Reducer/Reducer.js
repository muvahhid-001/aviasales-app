const initialState = {
  raceSort: 'CHEAPEST',
  filterTransfer: {
    all: true,
    noTransfers: true,
    oneTransfers: true,
    twoTransfers: true,
    threeTransfers: true,
  },
  loading: true,
  error: null,
  id: null,
  btStatus: false,
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
      const newFT = { ...state.filterTransfer, noTransfers: !state.filterTransfer.noTransfers };
      newFT.all = Object.values(newFT).slice(1).every(Boolean);
      return { ...state, filterTransfer: newFT };
    }
    case 'ONETRANSFERS': {
      const newFT = { ...state.filterTransfer, oneTransfers: !state.filterTransfer.oneTransfers };
      newFT.all = Object.values(newFT).slice(1).every(Boolean);
      return { ...state, filterTransfer: newFT };
    }
    case 'TWOTRANSFERS': {
      const newFT = { ...state.filterTransfer, twoTransfers: !state.filterTransfer.twoTransfers };
      newFT.all = Object.values(newFT).slice(1).every(Boolean);
      return { ...state, filterTransfer: newFT };
    }
    case 'THREETRANSFERS': {
      const newFT = { ...state.filterTransfer, threeTransfers: !state.filterTransfer.threeTransfers };
      newFT.all = Object.values(newFT).slice(1).every(Boolean);
      return { ...state, filterTransfer: newFT };
    }
    case 'FETCH_ID':
      return { ...state, loading: true, error: null };
    case 'FETCH_ID_SUCCESS':
      return { ...state, loading: false, id: action.payload.searchId };
    case 'FETCH_ID_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'FETCH_TICKET':
      return { ...state, loading: true, error: null };
    case 'FETCH_TICKET_SUCCESS':
      return { ...state, loading: false, tickets: action.payload };
    case 'FETCH_TICKET_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'FETCH_TICKET_UPDATE':
      return { ...state, loading: false, tickets: action.payload };
    case 'BURGER':
      return { ...state, btStatus: !state.btStatus };
    default:
      return state;
  }
};

export default reducer;
