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
    CalendarToday,
    PhoneAndroid,
    LocationSearching,
    Publish,
} from "@material-ui/icons";

const Container = styled.div`
    flex: 4;
    padding: 20px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UserTitle = styled.h1``;
const UserAdd = styled.button`
    width: 100px;
    border: none;
    color: #fff;
    background-color: #09a355;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    cursor: pointer;
`;

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;
const UserShow = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
`;
const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    margin-left: 20px;
    box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
`;
const UserShowTop = styled.div`
    display: flex;
    align-items: center;
`;

const UserShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
`;
const TopName = styled.span`
    font-weight: 600px;
`;
const TopTitle = styled.span`
    font-weight: 400;
    color: #555;
`;

const UserShowBottom = styled.div`
    margin-top: 20px;
`;

const UserShowTitle = styled.span`
    font-weight: 600;
    font-size: 16px;
    color: #555;
`;
const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #444;
`;
const UserInfoTitle = styled.span``;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 20px;
    object-fit: cover;
`;

const Icon = styled.div`
    font-size: 16px !important;
    margin-right: 10px;
    display: flex;
    align-items: center;
`;
const UserUpdateTitle = styled.div`
    font-weight: 600;
    font-size: 22px;
`;
const UserUpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;

const UserUpdateItemLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;
const UserLabel = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
`;
const UserUpdateInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #555;
    width: 250px;
    height: 30px;
`;
const UserUpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const UserUpdateUpload = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const UserUploadInput = styled.input`
    cursor: pointer;
`;
// const UploadLabel = styled.label``;
const UploadImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 20px;
    object-fit: cover;
`;
const UploadButton = styled.button`
    color: #fff;
    background-color: #505be4;
    border-radius: 5px;
    border: none;
    padding: 5px;
    font-weight: 600;
    cursor: pointer;
`;

const User = () => {
    return (
        <Container>
            <Title>
                <UserTitle>Edit User</UserTitle>
                <UserAdd>Create</UserAdd>
            </Title>
            <UserContainer>
                <UserShow>
                    <UserShowTop>
                        <Image
                            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <UserShowTopTitle>
                            <TopName>Jon Snow</TopName>
                            <TopTitle>Nightwatcher</TopTitle>
                        </UserShowTopTitle>
                    </UserShowTop>
                    <UserShowBottom>
                        <UserShowTitle>Account Details</UserShowTitle>
                        <UserShowInfo>
                            <Icon>
                                <PermIdentity />
                            </Icon>
                            <UserInfoTitle>jon123</UserInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <Icon>
                                <CalendarToday />
                            </Icon>
                            <UserInfoTitle>10.12.2000</UserInfoTitle>
                        </UserShowInfo>
                        <UserShowTitle>Contact Details</UserShowTitle>
                        <UserShowInfo>
                            <Icon>
                                <PhoneAndroid />
                            </Icon>
                            <UserInfoTitle>+01747558899</UserInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <Icon>
                                <MailOutline />
                            </Icon>
                            <UserInfoTitle>jon123@gmail.com</UserInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <Icon>
                                <LocationSearching />
                            </Icon>
                            <UserInfoTitle>Uttara | Dhaka</UserInfoTitle>
                        </UserShowInfo>
                    </UserShowBottom>
                </UserShow>
                <UserUpdate>
                    <UserUpdateTitle>Edit</UserUpdateTitle>
                    <UserUpdateForm>
                        <UserUpdateLeft>
                            <UserUpdateItemLeft>
                                <UserLabel>Username</UserLabel>
                                <UserUpdateInput
                                    type="text"
                                    placeholder="jon123"
                                />
                            </UserUpdateItemLeft>
                            <UserUpdateItemLeft>
                                <UserLabel>Full Name</UserLabel>
                                <UserUpdateInput
                                    type="text"
                                    placeholder="Jon Snow"
                                />
                            </UserUpdateItemLeft>
                            <UserUpdateItemLeft>
                                <UserLabel>Email</UserLabel>
                                <UserUpdateInput
                                    type="text"
                                    placeholder="jon123@gmail.com"
                                />
                            </UserUpdateItemLeft>
                            <UserUpdateItemLeft>
                                <UserLabel>Phone</UserLabel>
                                <UserUpdateInput
                                    type="text"
                                    placeholder="+01747558899"
                                />
                            </UserUpdateItemLeft>
                            <UserUpdateItemLeft>
                                <UserLabel>Address</UserLabel>
                                <UserUpdateInput
                                    type="text"
                                    placeholder="Uttara|Dhaka"
                                />
                            </UserUpdateItemLeft>
                        </UserUpdateLeft>
                        <UserUpdateRight>
                            <UserUpdateUpload>
                                <UploadImage
                                    src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                {/* <UploadLabel htmlFor="file">
                                        <Publish />
                                    </UploadLabel> */}
                                <UserUploadInput type="file" />
                            </UserUpdateUpload>
                            <UploadButton>Upload</UploadButton>
                        </UserUpdateRight>
                    </UserUpdateForm>
                </UserUpdate>
            </UserContainer>
        </Container>
    );
};

export default User;
