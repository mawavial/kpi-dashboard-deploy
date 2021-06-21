import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import React from "react"
import homeStyle from '../styles/Home.module.css'
import Filter from '../components/filter'
import Kpis from "../components/kpis"

const Dashboard = () => {
    return (
        <Container className={homeStyle.container} >
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
                style={{marginTop: 30}}
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Filter />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Kpis />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;