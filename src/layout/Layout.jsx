import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/leftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3} sm={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6} sm={6}>
                        <h2>Main content coming...</h2>
                    </Col>
                    <Col lg={3} sm={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Layout;