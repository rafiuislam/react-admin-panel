import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
`;
const Title = styled.span`
    font-size: 28px;
    font-weight: 600;
`;
const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`;
const TableRow = styled.tr``;
const TableHead = styled.th`
    text-align: left;
`;
const TableData = styled.td`
    font-weight: 400;
    color: #555;
`;
const User = styled.div`
    display: flex;
    align-items: center;
`;
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
`;
const UserName = styled.div`
    font-weight: 600;
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => {
        if (props.type === "Approved") return "#e5faf2";
        else if (props.type === "Declined") return "#fff0f1";
        else return "#ebf1fe";
    }};
    color: ${(props) => {
        if (props.type === "Approved") return "#3bb077";
        else if (props.type === "Declined") return "#d95087";
        else return "#2a7ade";
    }};
`;

const WidgetLg = () => {
    const ButtonLg = ({ type }) => {
        return <Button type={type}>{type}</Button>;
    };
    return (
        <Container>
            <Title>Latest Transtions</Title>
            <Table>
                <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
                <TableRow>
                    <TableData>
                        <User>
                            <Image src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            <UserName>john</UserName>
                        </User>
                    </TableData>
                    <TableData>11,Nov, 2021</TableData>
                    <TableData>$202,000</TableData>

                    <TableData>
                        <ButtonLg type="Approved" />
                    </TableData>
                </TableRow>

                <TableRow>
                    <TableData>
                        <User>
                            <Image src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            <UserName>john</UserName>
                        </User>
                    </TableData>
                    <TableData>11,Nov, 2021</TableData>
                    <TableData>$202,000</TableData>

                    <TableData>
                        <ButtonLg type="Declined" />
                    </TableData>
                </TableRow>

                <TableRow>
                    <TableData>
                        <User>
                            <Image src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            <UserName>john</UserName>
                        </User>
                    </TableData>
                    <TableData>11,Nov, 2021</TableData>
                    <TableData>$202,000</TableData>

                    <TableData>
                        <ButtonLg type="Pending" />
                    </TableData>
                </TableRow>

                <TableRow>
                    <TableData>
                        <User>
                            <Image src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            <UserName>john</UserName>
                        </User>
                    </TableData>
                    <TableData>11,Nov, 2021</TableData>
                    <TableData>$202,000</TableData>

                    <TableData>
                        <ButtonLg type="Approved" />
                    </TableData>
                </TableRow>
            </Table>
        </Container>
    );
};

export default WidgetLg;
