import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class CreateMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: "", firstName: "", lastName: "", phone: "", homeAddress: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
                this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }
       handleFirstnameChange(event) {
        this.setState({firstName: event.target.value});
    }
    handleLastnameChange(event) {
        this.setState({lastName: event.target.value});
    }
    handleAddressChange(event) {
        this.setState({homeAddress: event.target.value});
    }
    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }
    handleSubmit(event) {
        var member = {firstName: this.state.firstName, lastName: this.state.lastName, phone: this.state.phone, homeAddress: this.state.homeAddress}
        const response = axios.post("http://localhost:8080/api/v1/members", member)
                .then((response) => {
                    console.log(response);

                }).catch((err) => {
            console.log(err.response.data);
            this.setState({error: err.response.data});
        });
        event.preventDefault();
    }
    render() {

        return(
                <div class="content">
                    <div class="Roboto margin-top-xsm"><span class="text-bold font-xl text-salmon">M</span>AJESTICHORSE 1.0</div>
                    <div class="Roboto margin-top-sm">Create new member <div class="border-bottom-crimson bg-crimson margin-top-xssm"></div></div>
                    <div class=" margin-top-xsm">
                
                        <div class=" ">
                
                
                            <form onSubmit={this.handleSubmit} className="flex-horizontal">
                                <div class="flex-vertical w-50">
                                    <span class="font-bold text-gray">First name*</span>
                                    <input type="text"  value={this.state.firstName} class="input-variant margin-sm-fixed" required onChange={this.handleFirstnameChange} placeholder="First name" />
                                    <span class="font-bold text-gray">Second name*</span>                            
                                    <input type="text"  value={this.state.lastName} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handleLastnameChange} placeholder="Last name" />
                                    <span class="font-bold text-gray">Phone*</span>                        
                                    <input type="text" id="phone" value={this.state.phone} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handlePhoneChange} placeholder="Phone" />
                                    <span class="font-bold text-gray">Home Address*</span>                        
                                    <input type="text" id="address" value={this.state.address} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handleAddressChange} placeholder="Address" />
                
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
    }
}
export default CreateMember;


