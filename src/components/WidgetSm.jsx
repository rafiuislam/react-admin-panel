import React from "react";
import styled from "styled-components";
import { Visibility, Language, Settings } from "@material-ui/icons";

const Container = styled.div`
    flex: 1;
    padding: 20px;
    margin-right: 20px;
    box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
`;
const Title = styled.span`
    font-size: 28px;
    font-weight: 600;
`;
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    object-fit: cover;
`;
const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0px;
`;
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`;
const User = styled.div`
    display: flex;
    flex-direction: column;
`;
const UserName = styled.span`
    font-weight: 600;
`;
const UserTitle = styled.span`
    font-weight: 400;
`;
const ButtonSm = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: #f5f5f5;
    color: #555;
    cursor: pointer;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-right: 5px;
    border: none;
`;

const WidgetSm = () => {
    return (
        <Container>
            <Title>New Joined Members</Title>
            <List>
                <Item>
                    <Image
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <User>
                        <UserName>John Doe</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <ButtonSm>
                        <Icon>
                            <Visibility />
                        </Icon>
                        Display
                    </ButtonSm>
                </Item>
                <Item>
                    <Image
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <User>
                        <UserName>John Doe</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <ButtonSm>
                        <Icon>
                            <Visibility />
                        </Icon>
                        Display
                    </ButtonSm>
                </Item>
                <Item>
                    <Image
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <User>
                        <UserName>John Doe</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <ButtonSm>
                        <Icon>
                            <Visibility />
                        </Icon>
                        Display
                    </ButtonSm>
                </Item>
                <Item>
                    <Image
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <User>
                        <UserName>John Doe</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <ButtonSm>
                        <Icon>
                            <Visibility />
                        </Icon>
                        Display
                    </ButtonSm>
                </Item>
                <Item>
                    <Image
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <User>
                        <UserName>John Doe</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <ButtonSm>
                        <Icon>
                            <Visibility />
                        </Icon>
                        Display
                    </ButtonSm>
                </Item>
            </List>
        </Container>
    );
};

export default WidgetSm;
