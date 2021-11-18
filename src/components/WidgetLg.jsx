import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
`;

const WidgetLg = () => {
    return <Container>Large</Container>;
};

export default WidgetLg;
