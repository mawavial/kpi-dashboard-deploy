import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Link from 'next/link';

const Login = () => {
    return (
        <Container>
            <Grid container
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                justify='flex-start'
                alignItems='flex-start'
                direction='row'
                style={{ marginTop: 80 }}
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant='h4' component='h1' >
                        Welcome to KPI Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Link href="/dashboard" >
                    <a>Go check KPI's</a>
                </Link>
                </Grid>
            </Grid>



        </Container>
    )
}

export default Login;