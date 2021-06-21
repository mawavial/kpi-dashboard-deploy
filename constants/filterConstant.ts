import { ITimespan } from "../interfaces/ITimespan";

const filterConstant: ITimespan[] = [
    {time_unit: 'WEEK',time_unit_count: 1, text: 'this week'},
    {time_unit: 'WEEK',time_unit_count: 2, text: 'last week'},
    {time_unit: 'MONTH',time_unit_count: 1, text: 'this month'},
    {time_unit: 'MONTH',time_unit_count: 2, text: 'last month'},
    {time_unit: 'QUARTER',time_unit_count: 1, text: 'this quarter'},
    {time_unit: 'QUARTER',time_unit_count: 2, text: 'last quarter'},
    {time_unit: 'YEAR',time_unit_count: 1, text: 'this year'},
    {time_unit: 'YEAR',time_unit_count: 2, text: 'last year'}
];

export default filterConstant;