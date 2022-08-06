import React, { Component } from "react";

import { Row, Card, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Main_one from './Main_one.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
        login:"",
        password:"",
        loggedIn : false
    }

  }

  onSubmit(){
    if((this.state.login == "admin")&&(this.state.password == "somepassword")){
        this.props.handleLogin()
        this.setState({loggedIn : true});
    } else {
        alert("Введены неправильные данные")
    }
  }

  onLoginChanged = (e) => {
    this.setState({
      login: e.target.value
    });
  }


  onPasswordChanged = (e) => {
    this.setState({
        password: e.target.value
      });
  }


  render(){
    if(this.state.loggedIn == true){
        return <Navigate to="/profile" replace={true} />
    } else {
        return <Row style = {{ marginLeft:"0", marginRight:"0"}}>
            <Card style={{width:"25%", height:"fit-content", marginLeft:"auto", marginRight:"auto", marginTop:"100px", backgroundColor:"lightcyan"}}>
                <Card.Title style={{marginLeft:"auto", marginRight:"auto", marginTop:"10px"}}><h2>Авторизация</h2></Card.Title>
                <Form onSubmit={()=>this.onSubmit()}>
                    <Form.Group>
                        <Form.Label style={{marginLeft:"5px"}}>Логин</Form.Label>
                        <Form.Control type="text" placeholder="Введите логин" value={this.state.login} onChange={this.onLoginChanged}/>
                    </Form.Group>
                    <Form.Group style={{marginTop:"20px"}}>
                        <Form.Label style={{marginLeft:"5px"}}>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" value={this.state.password} onChange={this.onPasswordChanged}/>
                    </Form.Group>
                    <div className="row justify-content-center">
                        <Button variant="primary" type="submit" style={{marginTop:"20px", marginBottom:"20px", width:"100px", marginLeft:"auto", marginRight:"auto"}}>Войти</Button>
                    </div>
                </Form>
            </Card>
        </Row>
    }
  }

  
}
export default Login;