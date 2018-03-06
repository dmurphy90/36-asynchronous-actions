
import superagent from 'superagent';
import { logError } from '../lib/utils';

export const trackGet = tracks => ({
  type: 'TOY_GET',
  payload: toys,
});

export const trackCreate = track => ({
  type: 'TOY_CREATE',
  payload: toy,
});

export const trackUpdate = track => ({
  type: 'TOY_UPDATE',
  payload: toy,
});

export const trackDelete = track => ({
  type: 'TOY_DELETE',
  payload: toy,
});