import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import React, { useEffect, useState } from "react"
import homeStyle from '../styles/Home.module.css'
import Kpis from "../components/kpis"
import Toolbar from "../components/toolbar"
import { useDispatch } from 'react-redux';
import { setKpi } from "../store/reducers/kpiReducer"
import { IKpi } from "../interfaces/IKpi"

export async function getServerSideProps(context: any) {
    const res = await fetch(`${process.env.URL}/api/getKpi`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: data, 
    }
  }


const Dashboard = (props: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //fast reload is cleanning store
        // dispatch(setKpi([...props.result]));
    }, [props])

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
                style={{ marginTop: 30 }}
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Toolbar />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: 20 }} >
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Kpis kpis={[...props.result] as IKpi[]}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;