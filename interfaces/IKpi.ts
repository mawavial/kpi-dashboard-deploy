import { IPeriod } from "./IPeriod";

export interface IKpi {
    _id?: string
    active_source?: IPeriod;
    weekly_active?: IPeriod;
    nps?: IPeriod;
    company: string;
} 
