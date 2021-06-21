import { Reducer } from 'react';
import { combineReducers } from 'redux';
import kpiReducer from './reducers/kpiReducer';


export interface IState {
    kpiReducer: any;
}


export default combineReducers<IState> ({
    kpiReducer
})