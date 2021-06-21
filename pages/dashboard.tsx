import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import React from "react"
import homeStyle from '../styles/Home.module.css'
import Kpis from "../components/kpis"
import Toolbar from "../components/toolbar"
import useSWR from 'swr'



// export async function getServerSideProps(context){ 
//     const res = await fetch('http://0.0.0.127:3000/api/getKpi')

//     // console.log('%c%s', 'color: #00bf00', res.json());
//     console.log('%c%s', 'color: #00bf00', JSON.stringify(res));
// }



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
                    <Toolbar />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop:20}} >
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Kpis />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;