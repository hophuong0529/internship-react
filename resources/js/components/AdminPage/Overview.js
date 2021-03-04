import '../../../css/admin.css'
import {PencilFill, PlusSquare, TrashFill} from "react-bootstrap-icons";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Overview() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data)
        })
    }, [])

    const handleDelete = (item) => {
        const productId = item.id
        axios.post(`/api/product/delete`, {productId})
            .then(() =>
                setProducts(
                    products.filter((x) => x.id !== item.id))
            )
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div id="DIV_admin_3">
                <div id="DIV_admin_4">
                    <div id="DIV_admin_5">
                        <div id="DIV_admin_6">
                            <h2 id="H2_admin_7">
                                Manager <b id="B_admin_8">Product</b>
                            </h2>
                        </div>
                        <div id="DIV_admin_9">
                            <Link to="/admin/product/add"
                                  id="A_admin_10"><PlusSquare/><span id="SPAN_admin_12">Add New Product</span></Link>
                        </div>
                    </div>
                </div>
                <table id="TABLE_admin_16" className="table table-striped">
                    <thead>
                    <tr>
                        <th style={{textAlign: 'center', width: '5%'}}>Id</th>
                        <th style={{textAlign: 'center', width: '5%'}}>Code</th>
                        <th style={{textAlign: 'center', width: '20%'}}>Image</th>
                        <th style={{textAlign: 'center', width: '15%'}}>Name</th>
                        <th style={{textAlign: 'center', width: '15%'}}>Price</th>
                        <th style={{textAlign: 'center', width: '5%'}}>Quantity</th>
                        <th style={{textAlign: 'center', width: '20%'}}>Description</th>
                        <th style={{textAlign: 'center', width: '5%'}}>Category</th>
                        <th style={{textAlign: 'center', width: '10%'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) =>
                        <tr style={{textAlign: "center"}} key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.code}</td>
                            <td>
                                {(product.images[0])
                                    ? (<img width="50%" src={"../../../storage/" + product.images[0].path} alt=""/>)
                                    : (<div style={{width: '96.4px', height: '96.4px', margin: "auto"}}><span>Không có hình ảnh</span>
                                    </div>)
                                }
                            </td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.description}</td>
                            <td>{product.category.name}</td>
                            <td style={{textAlign: 'right'}}>
                                <Link to={"/admin/product/edit/" + product.id}
                                      style={{
                                          paddingRight: '20px',
                                          color: 'black',
                                          textDecoration: 'none'
                                      }}><PencilFill/></Link>
                                <button onClick={() => {
                                    if(window.confirm('Bạn muốn xóa sản phẩm này?')) handleDelete(product)
                                }} style={{
                                    color: 'rgb(255 145 163)',
                                    paddingRight: '20px',
                                    border: 'none',
                                    background: 'none'
                                }}><TrashFill/>
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Overview
