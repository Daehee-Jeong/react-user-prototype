import React, { Component } from 'react';
import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Col, 
    Label, 
    Input
} from 'reactstrap';
import * as service from '../../../services/user.js';

class ApLoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = { modal: this.props.modal }    
        this.toggle = this.props.toggle.bind(this);
        this.joinToggle = this.props.joinToggle.bind(this);

        this.state = {
            idValid: false,
            idEntered: '',
            pwValid: false,
            pwEntered: ''
        }
    }

    fetchUserId = async (userId) => {
        const _userId = await service.getUserId(userId);
        console.log(_userId);
    }

    validateId = (idEntered) => {
        const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

        if (idEntered.match(emailRegExp)) {
          this.setState({
            idValid: true,
            idEntered
          });
        } else {
          this.setState({
            idValid: false,
            idEntered
          });
        }
    }

    isEnteredIdValid = () => {
        const { idEntered, idValid } = this.state;
        if (idEntered) return idValid;
    }

    validatePassword = (pwEntered) => {
        if (pwEntered.length > 7) {
            this.setState({
                pwValid: true,
                pwEntered
            });
        } else {
            this.setState({
                pwValid: false,
                pwEntered
            })
        }
    }

    isEnteredPwValid = () => {
        const { pwEntered, pwValid } = this.state;
        if (pwEntered) return pwValid;
    }

    inputClassNameHelper = (booleanValue) => {
        switch (booleanValue) {
            case true:
                return 'is-valid';
            case false:
                return 'is-invalid';
            default:
                return '';
        }
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.state.className} backdrop={'static'}>
                <ModalHeader toggle={this.toggle}>로그인</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                        <Input 
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="이메일 주소를 입력하세요"
                            valid={this.state.idValid}
                            className={`form-control ${this.inputClassNameHelper(this.isEnteredIdValid())}`}
                            onChange={e => this.validateId(e.target.value)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="비밀번호를 입력하세요"
                            className={`form-control ${this.inputClassNameHelper(this.isEnteredPwValid())}`}
                            onChange={e => this.validatePassword(e.target.value)} />
                        </Col>
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={ () => {this.fetchUserId('daehee');} }>로그인</Button>{' '}
                    <Button color="secondary" onClick={this.joinToggle}>회원가입</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ApLoginModal;