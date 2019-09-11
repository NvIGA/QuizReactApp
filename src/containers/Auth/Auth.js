import React, {Component} from 'react'
import classes from './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js'
import {connect} from "react-redux";
import {auth} from "../../store/actions/authActions";


class Auth extends Component {

    state = {
        touchedBtn: false,
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                    maxLength: 45
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 16
                }
            }
        }
    };

    validateControl = (value, validation) => {
        console.log();

        if (!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    };

    onChangeHandler = (e, controlName) => {

        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid

        });
        this.setState({
            formControls,
            isFormValid
        })
    };

    renderInput = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
                const control = this.state.formControls[controlName];
                return (
                    <Input
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        errorMessage={control.errorMessage}
                        // shoudValidate={false}
                        onChange={(e) => this.onChangeHandler(e, controlName)}
                    />
                )
            }
        );
    };

    loginHandler =  () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            true
        );

        this.setState({
            touchedBtn: true
        })
    };

    registerHandler =  () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        );

        this.setState({
            touchedBtn: true
        })
    };

    submitHandler = e => {

    };


    render() {


        return (
            <div className={classes.Auth}>
                <div className={classes.AuthWrapper}>
                    <h1>Auth</h1>
                    <form
                        className={classes.AuthForm}
                        onSubmit={this.submitHandler}>

                        {this.renderInput()}

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            touchedBtn={this.state.touchedBtn}
                            isFormValid={this.state.isFormValid}>

                            Login
                        </Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                            touchedBtn={this.state.touchedBtn}
                            isFormValid={this.state.isFormValid}>
                            Sign up
                        </Button>
                    </form>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return{
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }

}

export default connect (mapStateToProps, mapDispatchToProps)(Auth)