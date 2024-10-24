

import { render } from "react-dom";
import React, { useState } from "react";

import axios from 'axios';



import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class UserRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', firstname: '', lastname: '', address: '', phone: '', error: '', next: false, previous: true, password: '', passwordConfirm: '', passwordmatch: '', confirm: false, activationCode: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.previous = this.previous.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleActivationCodeSubmit = this.handleActivationCodeSubmit.bind(this);
        this.handleActivationCodeChange = this.handleActivationCodeChange.bind(this);
        this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});

    }

    handleFirstnameChange(event) {
        this.setState({firstname: event.target.value});
    }
    handleLastnameChange(event) {
        this.setState({lastname: event.target.value});
    }
    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }
    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }
    async handlePasswordChange(event) {
        await this.setState({password: event.target.value});
        if (this.state.password === this.state.passwordConfirm) {
            this.setState({passwordmatch: "Passwords match"});
        } else {
            this.setState({passwordmatch: "Passwords do not match"});
        }
    }
    async handlePasswordConfirmChange(event) {
        await this.setState({passwordConfirm: event.target.value});
        if (this.state.password === this.state.passwordConfirm) {
            this.setState({passwordmatch: "Passwords match"});
        } else {
            this.setState({passwordmatch: "Passwords do not match"});
            console.log(this.state.password + " " + this.state.passwordConfirm);
        }
    }
    async handleActivationCodeChange(event) {
        this.setState({activationCode: event.target.value});
    }

    handleSubmit(event) {
        var user = {email: this.state.email, firstname: this.state.firstname, lastname: this.state.lastname, address: this.state.address, phone: this.state.phone, password: this.state.password};
        console.log(user);
        const response = axios.post("http://mizani-hub:8080/api/v1/users/signup", user)
                .then((response) => {
                    this.setState({confirm: true});
                    //window.location.href = '/student/login';
                }).catch((err) => {
            console.log(err);

            this.setState({error: err});
        });
        event.preventDefault();
    }

    handlePassword(event) {
        this.setState({next: true});
        event.preventDefault();
    }
    previous(event) {
        this.setState({next: false});
        event.preventDefault();
    }
    handleActivationCodeSubmit(event) {
        var user = {email: this.state.email, activationCode: this.state.activationCode};
        const response = axios.post("http://localhost:8080/api/v1/users/activate", user)
                .then((response) => {
                    window.location.href = '/student/login';
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });
        event.preventDefault();
    }

    render() {
        if (this.state.confirm) {
            return(<div id="plage" class="content">
            
                <div class="w-75 margin-top-md  height-md">
            
                    <div class="w-50 float-left  padding-md height-max">
                        <div class="login-image">
                        </div>  
                    </div>
                    <div class="w-50 float-left  bg-variant padding-md height-max">
                        <p class="crimson-text"><b>Activate your account</b></p>
                        <p class="font-xsm">We have sent an activation code to your mobile device.</p>
                        <form onSubmit={this.handleActivationCodeSubmit} className="">
                            <input type="text"  value={this.state.activationCode} class=" input-variant form-insput  margin-sm w-100" required onChange={this.handleActivationCodeChange} placeholder="Activation code" /> 
                            <p class="font-xsm">{this.state.message}</p> 
            
                            <input type="submit" value="Submit"  className="button-variant text-white font-sm "/>
                        </form>
                    </div>
                </div>
            
            </div>);
        } else {
            if (!this.state.next) {
                return (
                        <div id="plage" class="content">
                        
                            <div class="session margin-top-xsm">
                                <div class="font-lg Roboto">Online Application</div>
                                <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                            </div>
                            <div class=" session">
                        
                                <div class=" ">
                        
                        
                                    <form onSubmit={this.handleSubmit} className="flex-horizontal " id="user_reg">
                                        <div class="flex-vertical w-50">
                                            <span class="font-bold text-gray">First name*</span>
                                            <input type="text"  value={this.state.firstname} class="input-variant margin-sm-fixed" required onChange={this.handleFirstnameChange} placeholder="First name" />
                                            <span class="font-bold text-gray">Second name*</span>                            
                                            <input type="text"  value={this.state.lastname} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handleLastnameChange} placeholder="Last name" />
                                            <span class="font-bold text-gray">E-mail address*</span>
                                            <input type="text" id="email" value={this.state.email} class="input-variant margin-sm-fixed " required onChange={this.handleEmailChange} placeholder="Email" />
                                            <span class="font-bold text-gray">Phone*</span>                        
                                            <input type="text" id="phone" value={this.state.phone} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handlePhoneChange} placeholder="Phone" />
                                            <span class="font-bold text-gray">Address*</span>                        
                                            <input type="text" id="address" value={this.state.address} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handleAddressChange} placeholder="Address" />
                                            <span class="font-bold text-gray">Password*</span>
                                            <input type="password"  value={this.state.password} class="input-variant margin-sm-fixed" required onChange={this.handlePasswordChange} placeholder="password" />
                                            <span class="font-bold text-gray">Confirm password*</span>                            
                                            <input type="password"  value={this.state.passwordConfirm} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handlePasswordConfirmChange} placeholder="confirm password" />
                                            <p class="font-xsm crimson-text">{this.state.passwordmatch}</p>                
                                        </div>  
                                        <div class="w-50 center flex-vertical">
                                            <div class=" Roboto">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
                                            <input type="submit" value="Next" className="btn-variant-2 text-white font-sm margin-sm" />
                                        </div>  
                        
                                    </form>
                                </div>
                        
                            </div> 
                        
                        </div>




                        );
            } else {
                return(
                        <div id="plage" class="content-body">
                        
                            <div class="session margin-top-xsm">
                                <div class="font-lg Roboto">Online Application</div>
                                <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                            </div>
                            <div class=" session">
                        
                                <div class=" ">
                        
                        
                                    <form onSubmit={this.handleSubmit} className="flex-horizontal " id="user_reg">
                                        <div class="flex-vertical w-50">
                                            <span class="font-bold text-gray">Password*</span>
                                            <input type="password"  value={this.state.password} class="input-variant margin-sm-fixed" required onChange={this.handlePasswordChange} placeholder="password" />
                                            <span class="font-bold text-gray">Confirm password*</span>                            
                                            <input type="password"  value={this.state.passwordConfirm} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handlePasswordConfirmChange} placeholder="confirm password" />
                                            <p class="font-xsm crimson-text">{this.state.passwordmatch}</p>
                        
                                        </div>
                                        <div class="w-50 center flex-vertical">
                                            <div class=" Roboto">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
                                            <div class="flex-horizontal w-50 center">
                                                <div class=" flex-horizontal "> 
                                                    <button class="btn-variant-5 flex-horizontal" onClick={this.previous}>
                                                        <span class="crimson-text text-bold font-sm ">  &lt;&lt;</span> <span class="font-sm center crimson-text">previous</span>
                                                    </button>                            
                                                </div>
                                                <input type="submit" value="Next" className="btn-variant-2 text-white font-sm margin-sm" />
                                            </div>   
                                        </div>
                                    </form>
                                </div>
                        
                            </div>
                        
                        
                        
                        </div>);
            }
        }
    }
}
;
export default UserRegistration;



