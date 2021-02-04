import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Categories from "../Categories";
import Carousel from "./Carousel";
import LatestProduct from "./LatestProduct";
import TopProduct from "./TopProduct";
import '../../../css/home.css'

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
                <LatestProduct/>
                <TopProduct/>
            </div>
        )
    }
}

export default Home
