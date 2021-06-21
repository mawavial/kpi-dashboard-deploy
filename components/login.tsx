import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Link from 'next/link';
import Button from "@material-ui/core/Button";

const Login = () => {
    return (
        <Container
            style={{
                marginTop: 120,
                border: '4px solid #4907a0',
                marginLeft: '10%',
                marginBottom: 40,
                width: '70%',
                borderRadius:20,
                boxShadow: '8px 8px 0 2px #c0c0c0',
            }}
        >
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
                style={{
                    marginTop: 30,
                    marginBottom: 40,
                    marginLeft: 40
                }}
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant='h4' component='h1' style={{color:'#556cd6'}} >
                        Welcome to KPI Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop:50}}>
                    <Button variant='contained' color='primary'>
                        <Link href="/dashboard" >
                            Check KPIs
                        </Link>
                    </Button>
                </Grid>
            </Grid>



        </Container>
    )
}

export default Login;