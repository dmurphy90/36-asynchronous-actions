import {combineReducers} from 'redux';
import customers from './customer';
import toys from './toy';

export default combineReducers({customers, toys});