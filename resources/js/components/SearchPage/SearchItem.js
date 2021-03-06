import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

class SearchItem extends Component {
    constructor(props) {

        super(props);
        this.state = {
            products: []
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

    componentDidMount() {
        const keyword = (this.props.location.search).substr(3)

        axios.get(`/api/search/${keyword}`).then(response => {
            this.setState({
                products: response.data,
            })
        })
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
                            <Link to={'/' + this.convertToSlug(product.name)}>
                                <img src={"../../../storage/" + product.images[0].path}
                                     className="imgProduct" alt=""/>
                            </Link>
                            <div className="order">
                                <a href="#" className="btn btn-outline-danger"
                                   style={{width: '100px'}}>Đặt mua</a>
                            </div>
                        </div>
                        <div style={{zIndex: 2, position: 'inherit'}}>
                            <div className="productName">
                                <Link to={'/' + this.convertToSlug(product.name)} href="#"
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
                }}>Kết quả tìm kiếm</h1>
                <Container>
                    <Row>
                        {this.renderProducts()}
                    </Row>
                </Container>
            </div>

        );
    }
}

export default SearchItem
