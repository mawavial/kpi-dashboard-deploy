import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import React from "react"

const KpiCard = () => {

    //call reducer and get kpi


    console.log('%c%s', 'color: #b5bcff',  );
    return (
        <Container>
            <Card style={{backgroundColor: '#b5bcff' }}>
                <CardContent>
                    Active sourcing
                </CardContent>
                <CardContent>
                    20
                </CardContent>
                <CardContent>
                    34 Last Period
                </CardContent>
            </Card>
        </Container>
    )
}

export default KpiCard;