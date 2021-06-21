import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import React from "react"
import IKpiData from "../interfaces/IKpiData";


interface IProps { 
    data: IKpiData;
}

const KpiCard = (props:IProps) => {

    //call reducer and get kpi


    console.log('%c%s', 'color: #b5bcff',  );
    return (
        <Container>
            <Card style={{backgroundColor: '#b5bcff' }}>
                <CardContent>
                    {props.data.name}
                </CardContent>
                <CardContent>
                    {props.data.value}
                </CardContent>
                <CardContent>
                    {props.data.lastValue} Last Period
                </CardContent>
            </Card>
        </Container>
    )
}

export default KpiCard;