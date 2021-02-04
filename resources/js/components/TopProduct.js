import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

class TopProduct extends Component {
    constructor() {

        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch('/api/top-product')
            .then(response => {
                return response.json();
            })
            .then(products => {
                this.setState({products});
            });
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                <Col key={product.id} xs={12} sm={8} md={3} style={{
                    marginTop: '15px',
                    paddingTop: '10px',
                }}>
                    <div className="thumbnail" style={{}}>
                        <img src={"../../" + product.images[0].path}
                             className="imgProduct" alt=""/>
                        <div className="order">
                            <a href="#" className="btn btn-outline-danger"
                               style={{width: '100px'}}>Đặt mua</a>
                        </div>
                        <div style={{zIndex: 2, position: 'inherit'}}>
                            <div className="productName">
                                <a href="#"
                                   style={{color: '#ba1826'}}>{product.name}</a>
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
                <div style={{height: '60px', backgroundColor: '#eb9b9b'}}>
                    <h3 style={{
                        lineHeight: '2.45',
                        fontWeight: 'bold',
                        paddingLeft: '10%',
                        marginBottom: '20px',
                        marginTop: '15px',
                        color: 'brown'
                    }}>Sản phẩm bán chạy</h3>
                </div>
                <Container>
                    <Row>
                        {this.renderProducts()}
                    </Row>
                </Container>
                <div style={{textAlign: "center", padding: '20px'}}>
                    <a className="btn-pink">Xem thêm</a>
                </div>
            </div>

        );
    }
}

export default TopProduct
