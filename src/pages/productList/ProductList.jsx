import "./productList.css";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { productDataRow } from "../../constant";
const ProductList = () => {
    const [data, setData] = useState(productDataRow);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className="productListProduct">
                        <img src={params.row.img} alt="" className="productListImg" />
                        {params.row.product}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={() => { handleDelete(params.row.id) }} className="productListDelete" />
                    </>
                )
            }
        }
    ];
    return (
        <div className="productList">
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

export default ProductList
