import {Component} from "react";
import axios from "axios";
import {CaretRightFill} from "react-bootstrap-icons";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {CartContext} from "../contexts/CartContext";

class Detail extends Component {
    constructor(props) {

        super(props)
        this.state = {
            product: {},
            products: [],
            images: []
        }
    }

    convertToSlug(name) {

        name = name.toLowerCase();

        name = name.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        name = name.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        name = name.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        name = name.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        name = name.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        name = name.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        name = name.replace(/(đ)/g, 'd');
        name = name.replace(/([^0-9a-z-\s])/g, '');
        name = name.replace(/(\s+)/g, '-');
        name = name.replace(/^-+/g, '');
        name = name.replace(/-+$/g, '');

        return name;
    }

    getData(name) {
        axios.get(`/api/product/${name}`).then(response => {
            this.setState({
                product: response.data,
                images: response.data.images
            })
        })

        axios.get(`/api/related-product/${name}`).then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    componentDidMount() {
        this.getData(this.props.match.params.name)
    }

    componentWillReceiveProps(newProps, preProps) {
        this.getData(newProps.match.params.name)
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                <Col key={product.id} xs={12} sm={8} md={3} style={{
                    marginTop: '15px',
                    paddingTop: '10px',
                }}>
                    <div className="thumbnail">
                        <div className="img-order">
                            <Link to={'/product/' + this.convertToSlug(product.name)}>
                                <img src={"../../../" + product.images[0].path}
                                     className="imgProduct" alt=""/>
                            </Link>
                            <div className="order">
                                <CartContext.Consumer>
                                    {({addToCart}) => (
                                        <Link to="/cart" onClick={() => addToCart(product)}
                                              className="btn btn-outline-danger"
                                              style={{marginTop: '20px', marginBottom: '30px', width: '200px'}}>
                                            Đặt mua ngay
                                        </Link>
                                    )}
                                </CartContext.Consumer>
                            </div>
                        </div>
                        <div style={{zIndex: 2, position: 'inherit'}}>
                            <div className="productName">
                                <Link to={'/product/' + this.convertToSlug(product.name)}
                                      className="link-detail">{product.name}</Link>
                            </div>
                            <div className="price">
                                {product.price.toLocaleString()}₫
                            </div>
                        </div>
                    </div>
                </Col>
            );
        })
    }

    render() {
        const {product, images} = this.state

        return (
            <div key={product.id}>
                <div style={{padding: '20px 50px 30px 100px'}}>
                    <div className="row">
                        <div className="col-md-5">
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {images.map(image => (
                                        <div className={"carousel-item" + (image === images[0] ? " active" : "")}
                                             key={image.id}>
                                            <img style={{width: "60%"}} className="d-block w-100"
                                                 src={"../../../" + image.path}
                                                 alt="First slide"/>
                                        </div>
                                    ))}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-7" style={{paddingLeft: "80px", paddingTop: "30px"}}>
                            <h1 style={{color: '#ba1826'}}>{product.name}</h1>
                            <br/>
                            <p>
                                <CaretRightFill/><span
                                style={{fontWeight: 'bold'}}> Giao hàng và đổi trả hàng :</span>
                                <br/>- Đổi hàng trong vòng 24h
                                <br/>- Giao hàng toàn quốc (Tính phí CPN)
                                <br/>- Thanh toán online đảm bảo hoặc thanh toán khi nhận hàng
                            </p>
                            <hr/>
                            <h2>Giá : <span style={{color: '#d0011b'}}>{product?.price?.toLocaleString()}₫<span/></span>
                            </h2>
                            <div style={{color: 'red'}}>
                                * Chỉ còn {product.quantity} sản phẩm
                            </div>
                            <CartContext.Consumer>
                                {({addToCart}) => (
                                    <Link to="/cart" onClick={() => addToCart(product)}
                                          className="btn btn-outline-danger"
                                          style={{marginTop: '20px', marginBottom: '30px', width: '200px'}}>Đặt mua ngay
                                    </Link>
                                )}
                            </CartContext.Consumer>
                            <div>
                                <label style={{fontWeight: "bold"}}>Mô tả:</label>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{height: '60px', backgroundColor: '#eb9b9b'}}>
                        <h3 style={{
                            lineHeight: '2.45',
                            fontWeight: 'bold',
                            paddingLeft: '10%',
                            marginBottom: '20px',
                            marginTop: '15px',
                            color: 'brown'
                        }}>Sản phẩm có liên quan</h3>
                    </div>
                    <Container>
                        <Row>
                            {this.renderProducts()}
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Detail
