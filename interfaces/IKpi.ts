import { IPeriod } from "./IPeriod";

export interface IKpi {
    active_source: IPeriod;
    weekly_active: IPeriod;
    nps: IPeriod;
} 
