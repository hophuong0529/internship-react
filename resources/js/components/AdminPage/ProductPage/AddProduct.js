import {useEffect, useState} from "react";
import axios from "axios";
import {useDropzone} from 'react-dropzone';
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import {CloseButton} from "react-bootstrap";

function AddProduct() {
    const {getRootProps, getInputProps} = useDropzone();

    const history = useHistory()
    const [categories, setCategories] = useState([])
    const [images, setImages] = useState([])
    const [categoryId, setCategoryId] = useState("")
    const [code, setCode] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [isTop, setIsTop] = useState(0)
    const [onSale, setOnSale] = useState(0)
    const [selectImages, setSelectImages] = useState([]);

    const handleImagesChange = e => {
        if (e.target.files) {
            setImages(e.target.files)

            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setSelectImages(
                (prevImages) => prevImages.concat(fileArray))
        }
    }

    const handleRemoveImage = (item) => {
        setSelectImages(
            selectImages.filter((x) => x !== item))
    }

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return (
                <div className="col-md-3" style={{position: 'relative'}} key={photo}>
                    <CloseButton onClick={() => handleRemoveImage(photo)}/>
                    <img src={photo} alt="" style={{width: '100%', margin: '0px 10px 10px 0px'}}/>
                </div>
            )
        })
    }

    const handleCreateProduct = event => {
        event.preventDefault()

        const formCreateData = new FormData()

        formCreateData.append('category_id', categoryId)
        formCreateData.append('name', name)
        formCreateData.append('code', code)
        formCreateData.append('quantity', quantity)
        formCreateData.append('price', price)
        formCreateData.append('description', description)
        formCreateData.append('is_top', isTop)
        formCreateData.append('on_sale', onSale)
        Array.from(images).forEach(el => formCreateData.append('images[]', el))

        axios.post(`/api/products`, formCreateData)
            .then(() => {
                alert('Create success.')
                history.push("/admin")
            })
    }

    useEffect(() => {
        axios.get('/api/categories').then(response => {
            setCategories(response.data)
        })
    }, [])

    return (
        <div className="row mt">
            <div className="col-lg-12">
                <div className="form-panel">
                    <h1 style={{
                        textAlign: 'center',
                        padding: '20px 0 50px 0',
                        fontWeight: 'bold',
                        color: 'rgb(255 166 181)'
                    }}> Create a Product</h1>
                    <form className="form-horizontal style-form" onSubmit={handleCreateProduct}>
                        <table className="table table-hover">
                            <tbody>
                            <tr>
                                <td style={{fontWeight: 'bold', width: '25%'}}>Category</td>
                                <td>
                                    <label>
                                        <select name="category_id" value={categoryId}
                                                onChange={(e) => setCategoryId(e.target.value)}
                                                className="form-control">
                                            <option>Choose an option</option>
                                            {categories.map((item) =>
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )}
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Product Code</td>
                                <td>
                                    <label>
                                        <input name="code" type="text" value={code} className="form-control"
                                               onChange={(e) => setCode(e.target.value)}/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Product Name</td>
                                <td>
                                    <label style={{width: '80%'}}>
                                        <input name="name" type="text" value={name}
                                               onChange={(e) => setName(e.target.value)} className="form-control"/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Product Images</td>
                                <td>
                                    <div className="container-fluid row">
                                        {renderPhotos(selectImages)}
                                    </div>
                                    <span>Select files:</span>
                                    <div {...getRootProps({className: 'dropzone', tabIndex: 0})}>
                                        <input {...getInputProps()} onChange={handleImagesChange}/>
                                        <span>Drag 'n' drop some files here, or click to select files</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Product Price</td>
                                <td>
                                    <label>
                                        <input name="price" type="text" value={price}
                                               onChange={(e) => setPrice(e.target.value)} className="form-control"/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Quantity</td>
                                <td><label>
                                    <input name="quantity" type="text" min="1" value={quantity} style={{width: '40%'}}
                                           onChange={(e) => setQuantity(e.target.value)} className="form-control"/>
                                </label></td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Description</td>
                                <td>
                                    <label style={{width: '100%'}}>
                                    <textarea rows="10" name="description" type="text"
                                              className="form-control" value={description}
                                              onChange={(e) => setDescription(e.target.value)}/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td/>
                                <td>
                                    <div className="form-check">
                                        <label style={{marginRight: "200px"}}>
                                            <input className="form-check-input" type="checkbox" name="is_top"
                                                   value={isTop}
                                                   onChange={(e) => (e.target.checked ? setIsTop(1) : setIsTop(0))}
                                            />
                                            <label className="form-check-label" style={{fontWeight: 'bold'}}>
                                                This is a Top product
                                            </label>
                                        </label>
                                        <label>
                                            <input className="form-check-input" type="checkbox" name="on_sale"
                                                   value={onSale}
                                                   onChange={(e) => (e.target.checked ? setOnSale(1) : setOnSale(0))}
                                            />
                                            <label className="form-check-label" style={{fontWeight: 'bold'}}>
                                                This is a Sale product
                                            </label>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td/>
                                <td>
                                    <button className="btn btn-success"
                                            style={{width: '200px'}}>Save
                                    </button>
                                    &nbsp;
                                    <Link to="/admin/products" style={{width: "200px"}}
                                          className="btn btn-danger">Back</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
