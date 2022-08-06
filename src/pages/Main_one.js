import React, { Component } from "react";

import { Col, Row, Container, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import les1 from '../les1.jpg'
import les2 from '../les2.jpg'
import les3 from '../les3.jpg'

class Main_one extends Component {
  constructor(props) {
    super(props);
    
  }

  render(){
    return <Row style = {{ marginLeft:"0", marginRight:"0" }}>
        <Container style = {{width:"45%"}}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {les1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {les2}
                        alt="Second slide"
                    />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {les3}
                        alt="Third slide"
                    />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    <div style={{marginTop: "1rem", padding: "1rem", backgroundColor: "lightcyan", position: "fixed", bottom: "0", left: "0", width: "100%"}}>
        <Row>
            <Col><Link to='/'>Главная</Link></Col>
            <Col><Link to='/login'>Авторизация</Link></Col>
            <Col><Link to='/profile'>Профиль</Link></Col>
        </Row>
    </div>
    </Row>
  }

}

export default Main_one;