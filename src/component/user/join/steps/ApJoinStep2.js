import React, { Component } from 'react';
import {
    Button, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Col, 
    Input
} from 'reactstrap';

class ApJoinStep2 extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.props.toggle.bind(this);
    }

    state = {
        countryCode: '+82',
        phoneNumberValid: false,
        phoneNumberEntered: '',
        authNumberInputEnabled: false,
        authNumberEntered: ''
    }

    moveToNextStep = () => {
        this.props.handler(this.state.countryCode.toString() + this.state.phoneNumberEntered.toString());
        this.props.moveToNextStep();
    }

    moveToPrevStep = () => {
        this.setState({
            phoneNumberValid: false,
            phoneNumberEntered: '',
            authNumberInputEnabled: false,
            authNumberEntered: ''
        }, 
        this.props.moveToPrevStep);
    }

    isEnteredPhoneNumberValid = () => {
        const { phoneNumberEntered, phoneNumberValid } = this.state;
        if (phoneNumberEntered) return phoneNumberValid;
    }

    validatePhoneNumber = (phoneNumberEntered) => {
        if (phoneNumberEntered.length > 7) {
            this.setState({
                phoneNumberValid: true,
                phoneNumberEntered
            });
        } else {
            this.setState({
                phoneNumberValid: false,
                phoneNumberEntered
            })
        }
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

    getAuthNumber = () => {
        this.setState({
            authNumberInputEnabled: true
        })
    }

    render() {
        return (
            <div>
                <ModalHeader toggle={this.toggle}>회원가입</ModalHeader>
                <ModalBody>
                    <h6>전화번호를 인증해주세요.<br />항공권 예매 시 올바른 예매 정보를 받기 위해 필요합니다.</h6>
                    <br />
                <Form>
                    <FormGroup row>
                        <Col sm={3}>
                            <Input type="select" name="select" id="exampleSelect" defaultValue={'+82'} onChange={e => console.log(e.target.value)}>
                                <option>+82</option>
                                <option>+83</option>
                                <option>+84</option>
                            </Input>
                        </Col>
                        <Col sm={6}>
                            <Input 
                                type="text"
                                name="text"
                                id="exampleText"
                                placeholder="전화번호를 입력하세요"
                                className={`form-control ${this.inputClassNameHelper(this.isEnteredPhoneNumberValid())}`}
                                onChange={e => this.validatePhoneNumber(e.target.value)} />
                        </Col>
                        <Col sm={3}>
                            <Button color="secondary" size="sm" onClick={this.getAuthNumber}>인증받기</Button>
                        </Col>
                    </FormGroup>
                    { this.state.authNumberInputEnabled
                    ? <FormGroup row>
                        <Col sm={12}>
                            <Input
                                type="text"
                                name="text"
                                id="exampleAuthNumber"
                                placeholder="인증번호 입력">
                            </Input>
                        </Col>
                    </FormGroup>
                    : ''}
                </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="link" onClick={this.moveToPrevStep}>이전으로 돌아가기</Button>
                    <Button color="primary" onClick={ this.moveToNextStep}>다음 (2/3)</Button>{' '}
                </ModalFooter>
            </div>
        )
    }
}

export default ApJoinStep2;