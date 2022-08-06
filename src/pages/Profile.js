import React, { Component } from "react";

import { Container, Row, Col, Image, Table, Form } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import null_photo from '../image.jpg'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
        first: "",
        second: "",
        third: "",
        birth_date:"",
        image: null_photo
    }
  }

  changeInfo(){
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }));
  }

  onSurnameChanged = (e) => {
    this.setState({
        first: e.target.value
      });
}

onNameChanged = (e) => {
    this.setState({
        second: e.target.value
      });
}

onPatronymicChanged = (e) => {
    this.setState({
        third: e.target.value
      });
}

onBirthDateChanged = (e) => {
    this.setState({
        birth_date: e.target.value
      });
}


newImage() {
    var input = document.createElement('input');
    input.type = 'file';
    
    input.onchange = e => {
        const new_image = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(new_image);
        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            this.setState({
                image: content
            });
        }
    }

    input.click();
}



  render(){
    return <Row style = {{ marginLeft:"0", marginRight:"0", marginTop:"5px"}}>
        <Container style = {{width:"45%"}}>
            <Row>
                <Col md={6}><h3 style = {{lineHeight:"50px"}}>Информация о пользователе</h3></Col>
                <Col md={{span:2,offset:4}}><button type="button" class="btn btn-primary btn-lg btn-block" onClick = {()=>this.changeInfo()}>Изменить</button></Col>
            </Row>
            <Row>
                <Col md={3}>{this.state.isToggleOn ?  <Image onClick={()=>this.newImage()} src={this.state.image} style={{width:"200px", height:"270px", cursor: "pointer"}}/> : <Image src={this.state.image} style={{width:"200px", height:"270px"}}/>}</Col>
                <Col md={9}>
                    <Table>
                        <tbody>
                            <tr style={{lineHeight:"50px"}}>
                                <td style={{width:"130px", textAlign:"left"}}>Фамилия</td>
                                <td>{this.state.isToggleOn ? <Form.Control type="text" placeholder="Введите фамилию" value={this.state.first} onChange={this.onSurnameChanged} style={{marginTop:"6px", marginBottom:"6px"}}/> : this.state.first}</td>
                            </tr>
                            <tr style={{lineHeight:"50px"}}>
                                <td style={{width:"130px", textAlign:"left"}}>Имя</td>
                                <td>{this.state.isToggleOn ? <Form.Control type="text" placeholder="Введите имя" value={this.state.second} onChange={this.onNameChanged} style={{marginTop:"6px", marginBottom:"6px"}}/> : this.state.second}</td>
                            </tr>
                            <tr style={{lineHeight:"50px"}}>
                                <td style={{width:"130px", textAlign:"left"}}>Отчество</td>
                                <td>{this.state.isToggleOn ? <Form.Control type="text" placeholder="Введите отчество" value={this.state.third} onChange={this.onPatronymicChanged} style={{marginTop:"6px", marginBottom:"6px"}}/> : this.state.third}</td>
                            </tr>
                            <tr style={{lineHeight:"50px", borderBottomStyle:"solid", borderBottomColor:"rgb(222, 226, 230)", borderBottomWidth:"1px"}}>
                                <td style={{width:"130px", textAlign:"left"}}>Дата рождения</td>
                                <td>{this.state.isToggleOn ? <Form.Control type="date" placeholder="Введите дату рождения" value={this.state.birth_date} onChange={this.onBirthDateChanged} style={{marginTop:"6px", marginBottom:"6px"}}/> : this.state.birth_date}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </Row>
  }

}

export default Profile;