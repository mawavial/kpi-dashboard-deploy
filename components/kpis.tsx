import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react"
import KpiCard from "./kpiCard";

const Kpis = () => {

    //call reducer and get kpi


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
                <KpiCard />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <KpiCard />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <KpiCard />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Kpis;