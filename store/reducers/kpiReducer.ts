import { IKpi } from "../../interfaces/IKpi";
import { IPeriod } from "../../interfaces/IPeriod";


export enum kpiReducerEnum {
    GET_LIST = 'GET_LIST',
    ADD = 'ADD'
}

const initialState: any = {}



// eslint-disable-next-line import/no-anonymous-default-export
export default(state = initialState, action: any): IKpi[] => { 
    switch(action.type){
        case kpiReducerEnum.GET_LIST: 
            return {...state}
        case kpiReducerEnum.ADD:
            return {...state, ...action.value }
        default:
            return state
    }
}

export function setKpi (data: IKpi[]){ 
    return { 
        type: kpiReducerEnum.ADD,
        data
    }
}

export function getKpi() { 
    return { 
        type: kpiReducerEnum.GET_LIST
    }
}

