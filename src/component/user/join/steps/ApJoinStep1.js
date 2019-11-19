import React, { Component } from 'react';
import {
    Button, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Col, 
    Label, 
    Input
} from 'reactstrap';

class ApJoinStep1 extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.props.toggle.bind(this);
    }

    state = {
        idValid: false,
        idEntered: '',
        pwValid: false,
        pwEntered: ''
    }

    moveToNextStep = () => {
        this.props.handler(
            this.state.idEntered,
            this.state.pwEntered
        );
        this.props.moveToNextStep();
    }

    fetchUserId = async (userId) => {
        console.log(userId);
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
                <ModalHeader toggle={this.toggle}>회원가입</ModalHeader>
                <ModalBody>
                <h6>로그인 시 사용하실 이메일 아이디와 비밀번호를 입력해주세요.</h6>
                <br />
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={3}>이메일</Label>
                        <Col sm={9}>
                        <Input 
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="이메일 입력"
                            className={`form-control ${this.inputClassNameHelper(this.isEnteredIdValid())}`}
                            onChange={e => this.validateId(e.target.value)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={3}>비밀번호</Label>
                        <Col sm={9}>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="비밀번호 입력"
                            className={`form-control ${this.inputClassNameHelper(this.isEnteredPwValid())}`}
                            onChange={e => this.validatePassword(e.target.value)} />
                        </Col>
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={ () => {this.moveToNextStep()} }>다음 (1/3)</Button>{' '}
                </ModalFooter>
            </div>
        )
    }
}

export default ApJoinStep1;