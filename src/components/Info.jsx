import React from "react";
import styled from "styled-components";
import {
    ArrowDownward,
    ArrowUpward,
    Language,
    Settings,
} from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const Item = styled.div`
    flex: 1;
    margin: 0 20px;
    padding: 30px;
    border-radius: 10px;

    tansform: scale(0);
    transition: transform 0.8s ease 0s;
    &:hover {
        color: white;
        background-color: #505be4;
        transform: scale(1.1);
    }
    cursor: pointer;
    box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
`;
const Title = styled.span`
    font-size: 20px;
`;
const MoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`;
const Money = styled.span`
    font-size: 20px;
    font-weight: bold;
`;
const MoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;
const Sub = styled.div`
    font-size: 15px;
`;
const ArrowUP = styled.span`
    font-size: 14px;
    margin-left: 5px;
    color: green;
`;
const ArrowDown = styled.span`
    font-size: 14px;
    margin-left: 5px;
    color: red;
`;

const Info = () => {
    return (
        <Container>
            <Item>
                <Title>Revenue</Title>
                <MoneyContainer>
                    <Money>$1,165</Money>
                    <MoneyRate>
                        -22
                        <ArrowDown>
                            <ArrowDownward />
                        </ArrowDown>
                    </MoneyRate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
            <Item>
                <Title>Sale</Title>
                <MoneyContainer>
                    <Money>$1,165</Money>
                    <MoneyRate>
                        -22
                        <ArrowDown>
                            <ArrowDownward />
                        </ArrowDown>
                    </MoneyRate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
            <Item>
                <Title>Cost</Title>
                <MoneyContainer>
                    <Money>$2,165</Money>
                    <MoneyRate>
                        -12.3
                        <ArrowUP>
                            <ArrowUpward />
                        </ArrowUP>
                    </MoneyRate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
        </Container>
    );
};

export default Info;
