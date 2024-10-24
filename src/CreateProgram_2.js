import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'
import ImageUpload from './ImageUpload';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class CreateProgram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: "", name: "", description: "", programId: ""};
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    }

    handleIdChange(event) {
        this.setState({id: event.target.value});
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }
    handleSubmit(event) {
        var program = {programId: this.state.id, name: this.state.name, description: this.state.description}
        const response = axios.post("programs/", program)
                .then((response) => {
                    swal("", "", "success");
                    this.setState({programId: response.data.id})
                }).catch((err) => {

        });
        event.preventDefault();
    }

    render() {

        return(
                <div class="">
                    {this.state.programId ? <Redirect to={"/programs/" + this.state.programId}/> : <p></p>}
                    <Nav/>
                
                    <div class="  margin-top-md session  ">
                        <div class="center fodrm  padding-md" id="">
                
                            <form onSubmit={this.handleSubmit} className="w-100">
                                <div class="flex-vertical w-100">
                                    <span class="play">Register a new program</span>
                                    <span class="font-bold float-left text-gray">Program Code*</span>
                                    <input type="text"  value={this.state.id} class="input-variant-x  margin-sm-fixed" required onChange={this.handleIdChange} placeholder="BPY-232 etc" />
                                    <span class="font-bold text-gray">Program Name*</span>                            
                                    <input type="text"  value={this.state.name} class=" input-variant-x form-input   margin-sm-fixed" required onChange={this.handleNameChange} placeholder="Software Devlopment With Java" />
                                    <span class="font-bold text-gray">About*</span>                        
                                    <textarea rows="6" type="text" id="phone" value={this.state.description} class=" input-variant-x  form-insput  margin-sm-fixed" required onChange={this.handleDescriptionChange} placeholder="Course description" />
                
                                </div>
                                <span> Select a header image</span>
                                <div class=" session cropper relative">
                
                                    <ImageUpload/>
                                </div>
                                <div class="flex-vertical">
                                    <div class=" Ubuntu font-sm">Once a new Program has been created,it should appear in the program list.</div>
                                    <div class=""> <input type="submit" value="Next" className="btn-variant-3  text-white font-sm margin-sm" /></div>
                                </div>  
                
                            </form>
                        </div>
                
                
                    </div>
                
                </div>
                );
    }
}
export default CreateProgram;