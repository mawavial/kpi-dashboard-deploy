import { Reducer } from 'react';
import { combineReducers, store } from 'redux';


export interface IState {
    kpiReducer: any;
}


export default combineReducers<IState> ({
    kpiReducer
})

