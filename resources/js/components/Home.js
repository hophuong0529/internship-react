import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Left from "./Left";
import Carousel from "./Carousel";
import LatestProduct from "./LatestProduct";
import TopProduct from "./TopProduct";

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{paddingTop: 0}}>
                    <Row style={{paddingRight: '10px'}}>
                        <Col md={3} style={{paddingRight: 0}}>
                            <Left/>
                        </Col>
                        <Col md={9}>
                            <Carousel/>
                        </Col>
                    </Row>
                </Container>
                <LatestProduct/>
                <TopProduct/>
            </div>
        )
    }
}

export default Home
