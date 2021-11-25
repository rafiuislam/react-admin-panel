import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 4;
`;
const UserTitle = styled.h1``;
const UserUpdateForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
// const UserUpdateLeft = styled.div`
//     display: flex;
//     flex-wrap: wrap;
// `;

const UserUpdateItemLeft = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 15px;
`;
const UserLabel = styled.label`
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 600;
    color: gray;
`;
const UserUpdateInput = styled.input`
    outline: none;
    border-radius: 5px;
    // border: none;
    border: 1px solid #555;
    width: 250px;
    height: 30px;
`;
const UserRadioInput = styled.input`
    margin-top: 15px;
`;

const UserRadiolabel = styled.label`
    font-size: 18px;
    margin: 5px;
    margin-right: 15px;
    color: gray;
`;

const UserSelect = styled.select`
    width: 250px;
    height: 30px;
    border-radius: 5px;
    outline: none;
`;

const UserOption = styled.option``;

const UserCreate = styled.button`
    width: 250px;
    border: none;
    font-weight: 600;
    color: #fff;
    background-color: #09a355;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 30px;
`;

// const UploadLabel = styled.label``;

const NewUser = () => {
    return (
        <Container>
            <UserTitle>New User</UserTitle>
            <UserUpdateForm>
                <UserUpdateItemLeft>
                    <UserLabel>Username</UserLabel>
                    <UserUpdateInput type="text" placeholder="jon123" />
                </UserUpdateItemLeft>
                <UserUpdateItemLeft>
                    <UserLabel>Full Name</UserLabel>
                    <UserUpdateInput type="text" placeholder="Jon Snow" />
                </UserUpdateItemLeft>
                <UserUpdateItemLeft>
                    <UserLabel>Email</UserLabel>
                    <UserUpdateInput
                        type="text"
                        placeholder="jon123@gmail.com"
                    />
                </UserUpdateItemLeft>
                <UserUpdateItemLeft>
                    <UserLabel>Password</UserLabel>
                    <UserUpdateInput type="password" placeholder="password" />
                </UserUpdateItemLeft>
                <UserUpdateItemLeft>
                    <UserLabel>Phone</UserLabel>
                    <UserUpdateInput type="text" placeholder="+01747558899" />
                </UserUpdateItemLeft>
                <UserUpdateItemLeft>
                    <UserLabel>Address</UserLabel>
                    <UserUpdateInput type="text" placeholder="Uttara|Dhaka" />
                </UserUpdateItemLeft>
                <UserUpdateItemLeft>
                    <UserLabel>Gender</UserLabel>
                    <newUserGender>
                        <UserRadioInput
                            type="radio"
                            name="gender"
                            value="male"
                        />
                        <UserRadiolabel for="male">Male</UserRadiolabel>
                        <UserRadioInput
                            type="radio"
                            name="gender"
                            value="female"
                        />
                        <UserRadiolabel for="male">Female</UserRadiolabel>
                        <UserRadioInput
                            type="radio"
                            name="gender"
                            value="other"
                        />
                        <UserRadiolabel for="other">Non-binary</UserRadiolabel>
                    </newUserGender>
                </UserUpdateItemLeft>
                <UserUpdateItemLeft>
                    <UserLabel>Active</UserLabel>
                    <UserSelect name="active">
                        <UserOption value="yes">Yes</UserOption>
                        <UserOption value="no">No</UserOption>
                    </UserSelect>
                </UserUpdateItemLeft>
                <UserUpdateItemLeft>
                    <UserCreate>Create</UserCreate>
                </UserUpdateItemLeft>
            </UserUpdateForm>
        </Container>
    );
};

export default NewUser;

{
    /* <UserLabel>Gender</UserLabel> */
}
