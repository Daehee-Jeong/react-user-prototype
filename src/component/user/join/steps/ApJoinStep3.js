import React, { Component } from 'react';
import {
    Button, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    ButtonGroup,
    FormGroup, 
    Col, 
    Input,
    Label
} from 'reactstrap';

class ApJoinStep3 extends Component {
    constructor(props) {
        super(props);
        this.moveToNextStep = this.props.moveToNextStep;
        this.toggle = this.props.toggle.bind(this);

        const year = (new Date()).getFullYear();
        this.yearList = Array.from(new Array(100), (val, index) => year - index);
        this.monthList = Array.from(new Array(12), (val, index) => 1 + index);
    }

    state = {
        gender: 0,
        dayList: [],
        inputYear: '',
        inputMonth: '',
        inputDay: ''
    }

    moveToPrevStep = () => {
        this.setState({
            gender: 0,
            dayList: [],
            inputYear: '',
            inputMonth: '',
            inputDay: ''
        });
        this.props.moveToPrevStep();
    }

    setGenderValue = index => {
        this.setState({
            gender: index
        });
    }

    onChangeYear = (inputYear) => {
        this.setState({inputYear});
        this.refreshDayList();
    }

    onChangeMonth = (inputMonth) => {
        this.setState({inputMonth});
        this.refreshDayList();
    }

    onChangeDay = (inputDay) => {
        this.setState({inputDay});
    }

    refreshDayList = () => {
        const lastDay = new Date(this.state.inputYear, this.state.inputMonth, 0);
        const _dayList = Array.from(new Array(lastDay.getDate()), (val, index) => 1 + index);

        this.setState({
            dayList: _dayList
        })
    }

    render() {
        return (
            <div>
                <ModalHeader toggle={this.toggle}>회원가입</ModalHeader>
                <ModalBody>
                    <h6>항공권 예매 시 필요한 필수 정보입니다.<br />여권에 표시된 정보와 동일하게 입력해주세요.</h6>
                    <br />
                    <Form>
                        <div>
                            <h5>성별</h5>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => this.setGenderValue(0)} active={this.state.gender === 0}>남성</Button>
                                <Button color="primary" onClick={() => this.setGenderValue(1)} active={this.state.gender === 1}>여성</Button>
                            </ButtonGroup>
                        </div>
                        <br />
                        <h5>이름</h5>
                        <FormGroup row>
                            <Col sm={12}>
                                <Input
                                    type="text"
                                    name="lastName"
                                    id="exampleLastName"
                                    placeholder="영문 성" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={12}>
                                <Input
                                    type="text"
                                    name="firstName"
                                    id="exampleFisrtName"
                                    placeholder="영문 이름" />
                            </Col>
                        </FormGroup>
                        <br />
                        <h5>생년월일</h5>
                        <FormGroup row>
                            <Col sm={4}>
                                <Input
                                    type="select"
                                    name="yearSelect"
                                    id="exampleYearSelect"
                                    onChange={ e => this.onChangeYear(e.target.value)}
                                    defaultValue={'년'}>
                                    <option key={-1} disabled>년</option>
                                    { this.yearList.map( (year) => {
                                    return (<option key={year}>{year}</option>)
                                    }) }
                                </Input>
                            </Col>
                            <Col sm={4}>
                                <Input
                                    type="select"
                                    name="monthSelect"
                                    id="exampleMonthSelect"
                                    onChange={ e => this.onChangeMonth(e.target.value)}
                                    defaultValue={'월'}>
                                    <option key={-1} disabled>월</option>
                                    { this.monthList.map( (month) => {
                                    return (<option key={month}>{month}</option>)
                                    }) }
                                </Input>
                            </Col>
                            <Col sm={4}>
                                <Input
                                    type="select"
                                    name="daySelect"
                                    id="exampleDaySelect"
                                    onChange={ e => this.onChangeDay(e.target.value)}
                                    defaultValue={'일'}>
                                    <option key={-1} disabled>일</option>
                                    { this.state.dayList.map( (day) => {
                                    return (<option key={day}>{day}</option>)
                                    }) }
                                </Input>
                            </Col>
                        </FormGroup>
                        <br />
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" />{' '}
                            (필수) 개인 정보 수급 동의
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" />{' '}
                            (필수) 에어프레미아 일반규정 및 홈페이지 이용약관동의
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" />{' '}
                            (필수) 개인정보 국외 이전 동의
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" />{' '}
                            (선택) 마케팅 수신 동의
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="link" onClick={this.moveToPrevStep}>이전으로 돌아가기</Button>
                    <Button color="primary" onClick={ () => {alert('회원가입 완료!')} }>회원가입 완료</Button>{' '}
                </ModalFooter>
            </div>
        )
    }
}

export default ApJoinStep3;