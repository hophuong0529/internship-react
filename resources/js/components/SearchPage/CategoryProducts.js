import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import {CartContext} from "../contexts/CartContext";
import {Dash} from "react-bootstrap-icons";

class CategoryProducts extends Component {
    constructor(props) {

        super(props);
        this.state = {
            products: [],
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
        axios.get(`/api/category/${name}`).then(response => {
            this.setState({
                products: response.data.products,
                category: response.data.category.name
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
                                        <Link to="/cart" onClick={() => addToCart(product)} className="btn btn-outline-danger"
                                              style={{marginTop: '20px', marginBottom: '30px', width: '200px'}}>Đặt mua ngay
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
        return (

            <div>
                <h1 style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    paddingTop: '30px',
                    color: '#c20000'
                }}>
                    <Dash/> {this.state.category} <Dash/>
                </h1>
                <Container>
                    <Row>
                        {this.renderProducts()}
                    </Row>
                </Container>
            </div>

        );
    }
}

export default CategoryProducts
