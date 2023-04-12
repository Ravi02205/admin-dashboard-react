import { DeleteOutline } from "@mui/icons-material";
import "./userList.css";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { userDataRow } from "../../constant";

const UserList = () => {

  const [data, setData] = useState(userDataRow);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username', headerName: 'Username', width: 200, renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline onClick={() => { handleDelete(params.row.id) }} className="userListDelete" />
          </>
        )
      }
    }
  ];


  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default UserList
