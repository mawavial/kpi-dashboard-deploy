import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react"
import homeStyle from '../styles/Home.module.css'

const Dashboard = () => {
    return (
        <Container className={homeStyle.container} style={{ }}>
            <Grid 
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                justify='flex-start'
                alignItems='flex-start'
                direction='row'
                style={{  }}
            >
                <h1>Watch me now</h1>
            </Grid>
        </Container>
    )
}

export default Dashboard;