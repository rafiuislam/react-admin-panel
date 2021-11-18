import React from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import Info from "../components/Info";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userData } from "../dummyData";

const Container = styled.div`
    flex: 4;
    margin-top: 20px;
`;

const Widgets = styled.div`
    display: flex;
    margin: 20px;
`;

const Home = () => {
    return (
        <Container>
            <Info />
            <Chart
                title="User Analytics"
                data={userData}
                dataKey="Active User"
                grid
            />
            <Widgets>
                <WidgetSm />
                <WidgetLg />
            </Widgets>
        </Container>
    );
};

export default Home;
