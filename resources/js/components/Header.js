import React, {Component} from 'react'
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Check, ChevronDoubleRight, Search, StarFill, TelephoneFill} from "react-bootstrap-icons";
import '../../css/header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {q: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({q: event.target.value});
    }

    render() {
        return (
            <Container fluid id="login_wrapper">
                <Row>
                    <Col md={3} className="title">
                        <h1>Mojiy</h1>
                        <p><Check/> UY TÍN<br/><Check/> CHẤT LƯỢNG</p>
                    </Col>
                    <Col md={6}>
                        <Form action={'/search'}>
                            <InputGroup>
                                <input className="form-control" type="text"
                                       placeholder="Nhập tên sản phẩm cần tìm ..."
                                       name="q" value={this.state.keyword} onChange={this.handleChange}
                                       autoComplete="off"/>
                                <InputGroup.Append>
                                    <Button variant="light">
                                        <Search/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        <div className="text" style={{paddingLeft: '40px'}}>
                            <p><StarFill/> Hệ thống bán lẻ quần áo và phụ kiện số 1 Việt Nam.</p>
                        </div>
                    </Col>
                    <Col md={3} id="contact" style={{paddingRight: '0px'}}>
                        <Container fluid as="ul">
                            <Row as="li">
                                <TelephoneFill/>&nbsp;Gọi đặt hàng :
                                <span style={{
                                    fontSize: '13.5px',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                            &nbsp;&nbsp;094.692.0529</span>
                            </Row>
                            <Row as="li" style={{paddingTop: '10px'}}>
                        <span>
                            <ChevronDoubleRight
                                style={{fontSize: '16px', lineHeight: '15px'}}/>&nbsp;
                            <span
                                style={{
                                    fontSize: '14px',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC
                            </span>
                        </span>
                            </Row>
                            <Row as="li">
                        <span>
                            <ChevronDoubleRight
                                style={{fontSize: '16px', lineHeight: '15px'}}/>&nbsp;
                            <span
                                style={{
                                    fontSize: '14px',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>CAM KẾT CHẤT LƯỢNG SẢN PHẨM
                            </span>
                        </span>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header
