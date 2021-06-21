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

    return (
        <Container>
            <Card style={{
                border: '2px solid #4907a0',
                borderRadius:20,
                backgroundColor:'#fff',
                alignItems:'center',
                boxShadow: '8px 8px 0 2px #c0c0c0',
                 }}>
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