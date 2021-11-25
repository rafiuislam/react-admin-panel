import React from "react";
import styled from "styled-components";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: #f0f0f0;
    position: sticky;
    top: 50px;
`;

const Wrapper = styled.div`
    padding: 0 20px;
    color: #333;
`;

const Menu = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h3`
    font-size: 18px;
    color: rgb(187, 187, 187);
    margin: auto;
    margin-top: 25px;
`;

const List = styled.ul`
    list-style: none;
    padding: 0 10px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: rgb(187, 187, 187);
    }
`;

const Icon = styled.div`
    font-size: 20px;
    margin-right: 5px;
    display: flex;
    align-items: center;
`;

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <Item>
                            <Icon>
                                <LineStyle />
                            </Icon>
                            Home
                        </Item>
                        <Item>
                            <Icon>
                                <Timeline />
                            </Icon>
                            Analytics
                        </Item>
                        <Item>
                            <Icon>
                                <TrendingUp />
                            </Icon>
                            Trends
                        </Item>
                    </List>
                </Menu>
                <Menu>
                    <Title>Menu</Title>
                    <List>
                        <Link to="/users" className="link">
                            <Item>
                                <Icon>
                                    <PermIdentity />
                                </Icon>
                                Users
                            </Item>
                        </Link>
                        <Link to="/products" className="link">
                            <Item>
                                <Icon>
                                    <Storefront />
                                </Icon>
                                Products
                            </Item>
                        </Link>
                        <Item>
                            <Icon>
                                <AttachMoney />
                            </Icon>
                            Transactions
                        </Item>
                        <Item>
                            <Icon>
                                <BarChart />
                            </Icon>
                            Reports
                        </Item>
                    </List>
                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <List>
                        <Item>
                            <Icon>
                                <ChatBubbleOutline />
                            </Icon>
                            Messages
                        </Item>
                        <Item>
                            <Icon>
                                <MailOutline />
                            </Icon>
                            Mail
                        </Item>
                        <Item>
                            <Icon>
                                <DynamicFeed />
                            </Icon>
                            Feedback
                        </Item>
                    </List>
                </Menu>
                <Menu>
                    <Title>Staff</Title>
                    <List>
                        <Item>
                            <Icon>
                                <WorkOutline />
                            </Icon>
                            Manage
                        </Item>
                        <Item>
                            <Icon>
                                <Timeline />
                            </Icon>
                            Analytics
                        </Item>
                        <Item>
                            <Icon>
                                <Report />
                            </Icon>
                            Report
                        </Item>
                    </List>
                </Menu>
            </Wrapper>
        </Container>
    );
};

export default Sidebar;
