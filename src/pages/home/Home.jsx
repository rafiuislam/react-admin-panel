import React from "react";
import styled from "styled-components";
import Info from "../../components/Info";

const Container = styled.div`
    flex: 4;
    margin-top: 20px;
`;

const Home = () => {
    return (
        <Container>
            <Info />
        </Container>
    );
};

export default Home;
