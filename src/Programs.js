import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Breadcrumbs, Typography, Box } from '@mui/material';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {program: [], error: "", id: "", name: "", description: "", target_batch: 0, courseId: "", courseName: "", courseDescription: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitCourse = this.handleSubmitCourse.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.showProgramRegistration = this.showProgramRegistration.bind(this);
        this.hideProgramRegistration = this.hideProgramRegistration.bind(this);
        this.showCourseRegistration = this.showCourseRegistration.bind(this);
        this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
        this.handleCourseIdChange = this.handleCourseIdChange.bind(this);

        this.handleCouresDescriptionChange = this.handleCouresDescriptionChange.bind(this);
    }
    async componentDidMount() {

        const response = await axios.get("programs/")
                .then((response) => {
                    console.log(response);
                    this.setState({program: response.data});
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });

    }
    handleCouresDescriptionChange() {
        this.setState({courseDescription: event.target.value});
    }
    handleCourseIdChange() {
        this.setState({courseId: event.target.value});
    }
    handleCourseNameChange() {
        this.setState({courseName: event.target.value});
    }

    showProgramRegistration() {

        document.getElementById("program-registration").style.display = "block";
    }
    showCourseRegistration(number) {

        document.getElementById("course-registration").style.display = "block";
        this.setState({target_batch: number});

    }

    hideProgramRegistration() {

        document.getElementById("program-registration").style.display = "none";
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
                }).catch((err) => {
            console.log(err.response.data);
            this.setState({error: err.response.data});
        });
        event.preventDefault();
    }
    handleSubmitCourse(event) {
        var course = {id: this.state.courseId, name: this.state.courseName, description: this.state.courseDescription};
        const response = axios.post("courses/" + this.state.target_batch, course)
                .then((response) => {
                    console.log(course);

                }).catch((err) => {
            console.log(err.response.data);
            this.setState({error: err.response.data});
        });
        event.preventDefault();
    }
    render() {

        return(
                <div class="">
                    <Nav/>
                
                    <div class="contsent-body margin-top-md   ">
                
                        <div class="center  border-rad-md-c padding-md" id="course-registration">
                            <span class="material-symbols-outlined float-lefts pointer close" onClick={this.hideProgramRegistration}>
                                close
                            </span>
                
                        </div>
                        <div class="p-head "><div class="font-xl  margin-top-sm  text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">PROGRAMS</span></div></div>
                        <Breadcrumbs aria-label="breadcrumb" class="mulish session font-xsm">
                            <Link to="" class="text-gray">
                            HOME
                            </Link>
                            <Link to="/program" class="text-gray"
                
                                  >
                            PROGRAMS
                            </Link>
                
                        </Breadcrumbs>                
                        <div>
                            <Link to="/programs/action/register" ><button class="session border-none  outline-none  padding-xsm  bg-yellow text-white">Create a new Program</button>  </Link>                 
                            </div>
                                       
                        <div class="content-body-md-min session">
                
                            {this.state.program.map(pr =>
                                        <Link to={'/programs/' + pr.id} class="relative bg-white">
                                        
                                        <div class="pointer">
                                            <div class="p-head-2" style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + pr.image.bigImage})`}}></div>
                                            <div class="font-mdd  text-gray  center margin-md padding-md">{pr.programId}:{pr.name} 
                                                </div> 
                                                
                                            <span class="font-xsm">{pr.k}</span>
                                        </div>
                                        <div class="w-100 hidden"><p class="Ubuntu font-sm font-bold cednter"></p>{pr.sessions.map(session => <div class="w-100 padding-sm margin-md"><div clas="float-right">
                                                    <span class="material-symbols-outlined font-lg text-saldmon text-bold  pointer">
                                                        ungroup 
                                                    </span>
                                                </div><span class="flex-verticald">Batch {session.sessionId}</span>{session.courses.map(course => <div class=" margin-md font-xsm  width-auto text-black pointer float-lefdt border-rad-med padding-sm margin-md ">{course.name}</div>)} <div class="float-right"><span class="item pointer font-xsm relative" onClick={(e) => this.showCourseRegistration(session.sessionId)}>
                                                        New course for this batch
                                                    </span></div></div>)}</div>
                                            <span class="badge text-white open-sans absolute bottom-0 font-xsm">Offered</span>
                                        </Link>)}
                        </div>
                
                    </div>
                </div>
                );
    }
}
export default Program;