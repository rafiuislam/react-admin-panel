import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div`
    display: flex;
    align-items: center;
`;
const Logo = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: #333;
`;

const Icons = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 20px;
    color: #333;
`;
const Badge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -4px;
    right: -4px;
    background-color: red;
    color: white;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`;

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>ADMIN</Logo>
                </Left>
                <Right>
                    <Icons>
                        <NotificationsNone />
                        <Badge>2</Badge>
                    </Icons>
                    <Icons>
                        <Language />
                        <Badge>2</Badge>
                    </Icons>
                    <Icons>
                        <Settings />
                    </Icons>
                    <ImgContainer>
                        <Image
                            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </ImgContainer>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Topbar;
