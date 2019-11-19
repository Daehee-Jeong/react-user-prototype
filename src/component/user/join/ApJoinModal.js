import React, { Component } from 'react';
import {
    Modal
} from 'reactstrap';
import ApJoinStep1 from '../../user/join/steps/ApJoinStep1';
import ApJoinStep2 from '../../user/join/steps/ApJoinStep2';
import ApJoinStep3 from '../../user/join/steps/ApJoinStep3';

class ApJoinModal extends Component {

    constructor(props) {
        super(props);
        this.state = { modal: this.props.modal }    
        this.toggle = this.props.toggle.bind(this);
        this.loginToggle = this.props.loginToggle.bind(this);

        this.state = {
            currentStep: 1,
            userEmail: '',
            userPassword: '',
            userPhoneNumber: '',
            userGender: '',
            userBirthday: '',
            userPrivacyAgreement: false,
            userUseAgreement: false,
            userMigrationAgreement: false,
            userMarketingAgreement: false
        }
    }

    setLoginInformation = (userEmail, userPassword) => {
        this.setState({
            userEmail,
            userPassword
        });
    }

    setPhoneNumber = (userPhoneNumber) => {
        console.log('userPhoneNumber: ' + userPhoneNumber);
        this.setState({ userPhoneNumber });
    }

    setPrivateInformation = (userGender,
                            userBirthday,
                            userPrivacyAgreement,
                            userUseAgreement,
                            userMigrationAgreement,
                            userMarketingAgreement) => {
        this.setState({
            userGender,
            userBirthday,
            userPrivacyAgreement,
            userUseAgreement,
            userMigrationAgreement,
            userMarketingAgreement
        }, 
        this.completeJoin);
    }

    completeJoin = () => {
        alert('완료: ' + JSON.stringify(this.state));
    }

    renderStep = index => {
        switch(index) {
            case 1:
                return <ApJoinStep1 
                            toggle={this.toggle}
                            moveToNextStep={this.moveToNextStep}
                            handler={this.setLoginInformation} />;
            case 2:
                return <ApJoinStep2
                            toggle={this.toggle} 
                            moveToNextStep={this.moveToNextStep}
                            moveToPrevStep={this.moveToPrevStep}
                            handler={this.setPhoneNumber} />;
            case 3:
                return <ApJoinStep3
                            toggle={this.toggle}
                            moveToNextStep={this.moveToNextStep}
                            moveToPrevStep={this.moveToPrevStep}
                            handler={this.setPrivateInformation} />;
            default:
                break;
        }
    }

    moveToNextStep = () => {
        this.setState({
            currentStep: this.state.currentStep+1
        });
    }

    moveToPrevStep = () => {
        this.setState({
            currentStep: this.state.currentStep-1
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.state.className} backdrop={'static'}>
                    {this.renderStep(this.state.currentStep)}
                </Modal>
            </div>
        )
    }
}

export default ApJoinModal;