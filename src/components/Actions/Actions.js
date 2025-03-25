export const cheapest = () => ({ type: 'CHEAPEST' });
export const fast = () => ({ type: 'FAST' });
export const optimal = () => ({ type: 'OPTIMAL' });
export const all = () => ({ type: 'ALL' });
export const off = () => ({ type: 'OFF' });
export const noTransfers = () => ({ type: 'NOTRANSFERS' });
export const oneTransfers = () => ({ type: 'ONETRANSFERS' });
export const twoTransfers = () => ({ type: 'TWOTRANSFERS' });
export const threeTransfers = () => ({ type: 'THREETRANSFERS' });

export const getId = () => async (dispatch) => {
  dispatch({ type: 'FETCH_REQUEST' });

  try {
    const response = await fetch(`${process.env.REACT_APP_API_ID}`);
    const data = await response.json();

    dispatch({ type: 'FETCH_ID_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_ID_FAILURE', error: error.message });
  }
};

export const getTickets = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_TICKET' });

  let allTickets = [];
  let stop = false;
  let isFirstRequest = true;

  while (!stop) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`);

      if (response.status === 500) {
        continue;
      }

      const data = await response.json();
      allTickets = [...allTickets, ...data.tickets];

      if (isFirstRequest) {
        dispatch({ type: 'FETCH_TICKET_SUCCESS', payload: allTickets });
        isFirstRequest = false;
      }

      stop = data.stop;
    } catch (error) {
      dispatch({ type: 'FETCH_TICKET_FAILURE', error: error.message });
      return;
    }
  }

  dispatch({ type: 'FETCH_TICKET_UPDATE', payload: allTickets });
};
