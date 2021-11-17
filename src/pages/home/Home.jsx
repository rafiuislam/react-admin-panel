import React from "react";
import styled from "styled-components";
import Chart from "../../components/Chart";
import Info from "../../components/Info";
import { userData } from "../../dummyData";

const Container = styled.div`
    flex: 4;
    margin-top: 20px;
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
        </Container>
    );
};

export default Home;
