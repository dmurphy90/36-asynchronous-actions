import superagent from 'superagent';
import {logError} from '../lib/utils';

// ACTION CREATORS
export const albumSet = albums => ({
  type: 'CUSTOMER_SET',
  payload: customers,
});

export const albumCreate = album => ({
  type: 'CUSTOMER_CREATE',
  payload: customer,
});

export const albumUpdate = album => ({
  type: 'CUSTOMER_UPDATE',
  payload: customer,
});

export const albumDelete = album => ({
  type: 'CUSTOMER_DELETE',
  payload: customer,
});

// ASYNC ACTIONS
export const customerFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/customer`)
    .then(res => dispatch(customerSet(res.body)))
    .catch(logError);
};

export const customerCreateRequest = album => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/customer`)
    .send(album)
    .then(res => dispatch(customerCreate(res.body)))
    .catch(logError);
};
