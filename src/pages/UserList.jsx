import { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Language, Settings } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 4;
    padding: 20px;
    box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 12px 10px 25px -1px rgba(0, 0, 0, 0.25);
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
    object-fit: cover;
`;

const User = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #3bb077;
    color: white;
    margin-right: 25px;
    text-decoration: none;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    color: red;
    cursor: pointer;
`;

const UserList = () => {
    const [data, setData] = useState(userRows);

    const DeleteUser = (id) => {
        setData(data.filter((user) => user.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "username",
            headerName: "Username",
            width: 200,
            renderCell: (params) => {
                return (
                    <User>
                        <Image src={params.row.avatar} alt="" />
                        {params.row.username}
                    </User>
                );
            },
        },
        {
            field: "email",
            headerName: "Email",
            width: 200,
        },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => {
                return (
                    <User>
                        <Link to={"/users/" + params.row.id}>
                            <Button>Edit</Button>
                        </Link>
                        <Icon>
                            <DeleteOutline
                                onClick={() => DeleteUser(params.row.id)}
                            />
                        </Icon>
                    </User>
                );
            },
        },
    ];

    return (
        <Container>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    );
};

export default UserList;
