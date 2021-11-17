import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Container = styled.div`
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
`;
const Title = styled.h3`
    margin-bottom: 20px;
`;
// const Container = styled.div``;
// const Container = styled.div``;

const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey={dataKey} stroke="#5550bd" />
                    <Line
                        type="monotone"
                        dataKey="Active User"
                        stroke="#5550bd"
                    />
                    <Tooltip />
                    {grid && (
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </Container>
    );
};

export default Chart;
