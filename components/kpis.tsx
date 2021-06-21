import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react"
import IKpiData from "../interfaces/IKpiData";
import KpiCard from "./kpiCard";

const Kpis = () => {

    //call reducer and get kpi
    const test: IKpiData[] = [
        {name: 'Active Source', value: 45, lastValue: 30 } as IKpiData,
        {name: 'Weekly active', value: 45, lastValue: 30 } as IKpiData,
        {name: 'Nps', value: 45, lastValue: 30 } as IKpiData
    ]

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
                justify='flex-start'
                alignItems='flex-start'
                direction='row'
                style={{ marginTop: 30 }}
            >
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <KpiCard data={test[0]} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <KpiCard data={test[1]}/>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <KpiCard data={test[2]}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Kpis;