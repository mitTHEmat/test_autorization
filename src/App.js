import React, { Component } from "react";

import { Navbar, Nav, Row, Col, Container, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import Main_one from './pages/Main_one.js';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogin(){
    this.setState({loggedIn : true});
  }

  handleLogout(){
    this.setState({loggedIn: false});
  }

  try_profile(){
    if(this.state.loggedIn==true){
      return "/profile"
    } else {
      return "/login"
    }
  }

  try_login = ()=>{
    if(this.state.loggedIn==true){
      return 
    } else {
      return "/login"
    }
  }


  
  render(){
    return <Container fluid
    style = {{ paddingRight:"0", paddingLeft:"0", height : "100%", position:"relative"}}>
      <Router>
      <Row style = {{ marginLeft:"0", marginRight:"0"}}>
            <Navbar variant="light" style={{backgroundColor:"lightcyan"}}>
            <Container fluid
              style = {{ paddingRight:"20px", paddingLeft:"20px", marginRight:"0", marginLeft:"0"}}>
              <Navbar.Brand></Navbar.Brand>
              <Navbar.Brand href="/">Суперсайт</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href={this.try_profile()}>Профиль</Nav.Link>
                <Nav.Link href={this.try_login()}>Авторизация</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link onClick={()=>this.handleLogout} href="/login">
                  Выход
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </Row>
        <Routes>
          <Route exact path="/" element={<Main_one/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/login" element={<Login handleLogin = {this.handleLogin}/>}/>
        </Routes>
      </Router>
    </Container>
    

  };
}

export default App;
