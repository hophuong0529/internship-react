import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Categories from "../Categories";
import Carousel from "./Carousel";
import LatestProducts from "./LatestProducts";
import TopProducts from "./TopProducts";

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{paddingTop: 0}}>
                    <Row style={{paddingRight: '10px'}}>
                        <Col md={3} style={{paddingRight: 0}}>
                            <Categories/>
                        </Col>
                        <Col md={9}>
                            <Carousel/>
                        </Col>
                    </Row>
                </Container>
                <LatestProducts/>
                <TopProducts/>
            </div>
        )
    }
}

export default Home
