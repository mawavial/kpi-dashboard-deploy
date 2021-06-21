import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react"
import { useSelector } from "react-redux";
import { IKpi } from "../interfaces/IKpi";
import IKpiData from "../interfaces/IKpiData";
import { IState } from "../store";
import KpiCard from "./kpiCard";

interface IProps {
    kpis: IKpi[]
}

const Kpis = (props: IProps) => {

    // const kpiSelector = useSelector<IState, IKpi>(state => state.kpiReducer);
    //call reducer and get kpi
    const test: IKpiData[] = [
        {name: 'Active Source', value: 45, lastValue: 30 } as IKpiData,
        {name: 'Weekly active', value: 45, lastValue: 30 } as IKpiData,
        {name: 'Nps', value: 45, lastValue: 30 } as IKpiData
    ]
    const result : IKpi[] = [...props.kpis];

    return (
        <Container>
            <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                justify='center'
                alignItems='center'
                direction='row'
                style={{ marginTop: 30 }}
            >
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{marginTop: 20}}>
                <KpiCard data={{name: 'Active Source', value: result[0].active_source?.current_period, lastValue:result[0].active_source?.last_period}} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{marginTop: 20}}>
                <KpiCard data={{name: 'Weekly Active', value: result[0].weekly_active?.current_period, lastValue:result[0].weekly_active?.last_period}} />
                
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{marginTop: 20}}>
                <KpiCard data={{name: 'NPS', value: result[0].nps?.current_period, lastValue:result[0].nps?.last_period}} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Kpis;