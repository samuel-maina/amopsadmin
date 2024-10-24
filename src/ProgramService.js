import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import swal from 'sweetalert';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {program: [], sessions: [], error: "", id: "", name: "", description: "", target_batch: 0, image: "",courseDescription:"",courseName:"",courseId:""};
        this.handleProgramEdit = this.handleProgramEdit.bind(this);
this.handleSubmitCourse = this.handleSubmitCourse.bind(this);
        this.hideCourseRegistration = this.hideCourseRegistration.bind(this);
        this.hideSessionRegistration = this.hideSessionRegistration.bind(this);
        this.showCourseRegistration = this.showCourseRegistration.bind(this);
        this.showSessionRegistration = this.showSessionRegistration.bind(this);
        this.handleProgramNameChange = this.handleProgramNameChange.bind(this);
        this.handleProgramIdChange = this.handleProgramIdChange.bind(this);
        this.showProgramDelete = this.showProgramDelete.bind(this);
        this.showProgramEdit = this.showProgramEdit.bind(this);
        this.hideProgramDelete = this.hideProgramDelete.bind(this);
        this.hideProgramEdit = this.hideProgramEdit.bind(this);
         this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
        this.handleCourseIdChange = this.handleCourseIdChange.bind(this);
        this.handleCourseDescriptionChange = this.handleCourseDescriptionChange.bind(this);
        this.handleProgramDescriptionChange = this.handleProgramDescriptionChange.bind(this);
    }
        handleCourseDescriptionChange() {
        this.setState({courseDescription: event.target.value});
    }
    handleCourseIdChange() {
        this.setState({courseId: event.target.value});
    }
    handleCourseNameChange() {
        this.setState({courseName: event.target.value});
    }
    hideSessionRegistration() {

        document.getElementById("session").style.display = "none";
    }
    showSessionRegistration() {
        document.getElementById("session").style.display = "block";

    }
    showProgramEdit() {
        document.getElementById("edit-program").style.display = "block";
        document.getElementById("delete-program").style.display = "none";
    }
    showProgramDelete() {
        document.getElementById("delete-program").style.display = "block";
        document.getElementById("edit-program").style.display = "none";
    }
    hideProgramDelete() {
        document.getElementById("delete-program").style.display = "none";
    }
    hideProgramEdit() {
        document.getElementById("edit-program").style.display = "none";
    }
    async componentDidMount() {

        const response = await axios.get("programs/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({program: response.data});
                    this.setState({sessions: response.data.sessions});
                    this.setState({programId: response.data.id});
                    this.setState({name: response.data.name});
                    this.setState({description: response.data.description});
                    this.setState({image: response.data.image.bigImage});
                    console.log(response);
                }).catch((err) => {

        });

    }
    handleProgramDescriptionChange() {

        this.setState({description: event.target.value});
    }

    handleProgramIdChange() {
        this.setState({program: event.target.value});
    }
    handleProgramNameChange() {
        this.setState({name: event.target.value});
    }

    showProgramRegistration() {

        document.getElementById("program-registration").style.display = "block";
    }
    showCourseRegistration(number) {

        document.getElementById("course-registration").style.display = "block";
        this.setState({target_batch: number});

    }

    hideCourseRegistration() {

        document.getElementById("course-registration").style.display = "none";
    }

    handleProgramEdit(event) {
        var course = {id: this.state.progamId, name: this.state.name, description: this.state.description};
        const response = axios.put("programs/" + this.props.match.params.id, course)
                .then((response) => {
                    this.componentDidMount();
                    this.hideProgramEdit();
                    swal("", "", "success");

                }).catch((err) => {

        });
        event.preventDefault();
    }
        handleSubmitCourse(event) {
        var course = {id: this.state.courseId, name: this.state.courseName, description: this.state.courseDescription};
        const response = axios.post("courses/" + this.state.target_batch, course)
                .then(() => {
                    

                }).catch((err) => {
        });
        event.preventDefault();
    }
    render() {

        return(
                <div class="margin-top-md">
                    <Nav/>
                
                    <div class="  ">
                        <div class="program border-rad-md padding-md" id="program-registration">
                            <span class="material-symbols-outlined float-lefts pointer close" onClick={this.hideProgramRegistration}>
                                close
                            </span>
                
                        </div>
                
                        <div class="form hidden border-rad-md-c padding-md" id="edit-program">
                            <span class="material-symbols-outlined float-lefts pointer close" onClick={this.hideProgramEdit}>
                                close
                            </span>
                
                            <form onSubmit={this.handleProgramEdit} className="">
                                <span class="font-lg play"> UPDATE COURSE DETAILS</span>
                                <div class="flex-vertical w-100">
                                    <span class="font-bold hidden float-left text-gray font-sm">Program code*</span>
                                    <input type="text"  value={this.state.programId} class="hidden input-variant-x border-rad-md-c margin-sm-fixed" required onChange={this.handleProgramIdChange} placeholder="BPY-232 etc" readonly/>
                                    <span class="font-bold text-gray font-sm">Program Name*</span>                            
                                    <input type="text"  value={this.state.name} class=" input-variant-x form-input border-rad-dmd  margin-sm-fixed" required onChange={this.handleProgramNameChange} placeholder="Software Devlopment With Java" />
                                    <span class="font-bold text-gray font-sm">About*</span>                        
                                    <textarea rows="6" type="text" value={this.state.description} class=" input-variant-x border-rad-dmd form-insput  margin-sm-fixed" required onChange={this.handleProgramDescriptionChange} placeholder="program description" />
                
                                </div>  
                                <div class="w-50">
                                    <div class=""> <input type="submit" value="Update program information" className="btn-variant-3  text-white text-bold font-sm margin-sm" /></div>
                                </div>  
                
                            </form>
                
                        </div>
                        <div class="form  border-rad-md-c hidden padding-md" id="course-registration">
                            <span class="material-symbols-outlined float-lefts pointer close" onClick={this.hideProgramEdit}>
                                close
                            </span>
                            <form onSubmit={this.handleSubmitCourse}>
                                <span class=' text-bold play'> CREATE A NEW COURSE</span>
                                <div class="flex-vertical padding-sm">
                                    <span class="Mulish font-sm">Course ID</span>
                                    <input class="input-variant-x" value={this.state.courseId} onChange={this.handleCourseIdChange}/>
                
                                </div>
                
                                <div class="flex-vertical padding-sm">
                                    <span class="Mulish font-sm">course name</span>
                                    <input type="decimal"class="input-variant-x" value={this.state.courseName} onChange={this.handleCourseNameChange}/>
                
                                </div>
                                <div class="flex-vertical padding-sm">
                                    <span class="Mulish font-sm">Additional Course Information</span>
                                    <textarea class="input-variant-x" value={this.state.courseDescription} onChange={this.handleCourseDescriptionChange}/>
                
                                </div>
                                <div class="padding-sm">
                                    <button class=" btn-variant-3">SUBMIT</button>
                                </div>                 
                            </form>
                        </div>
                        <div class="form overflow-non border-rad-md padding-md" id="delete-program">
                            <span class="material-symbols-outlined float-lefts pointer close" onClick={this.hideProgramDelete}>
                                close
                            </span>
                            <div className="flex  center">
                                <div class="flex-vertical w-100">
                                    <img src='/images/warning.png'/>
                                </div>  
                                <div class="w-50 hidden center flex-vertical">
                                    <div class="  font-sm">You are about to delete a program,this will lead to loss of all data related to the program including student enrollments,courses, and tutors. One the data has been lost it cannot be recovered. Are you still sure you want to do this?</div>
                                    <div class="w-80"> <input type="submit" value="Yes I am sure" className="btn-variant-6 w-100 text-white text-bold font-sm margin-sm" /></div>
                                </div>  
                
                            </div>
                        </div>
                        <div class="p-head " style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + this.state.image})`}}><div class="font-xl  margin-top-sm  text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">PROGRAMS</span></div></div>
                                         
                        <div class=" margin-top-xsm text-gray">


                            <div class=" ">

                                <div class="flex-verticadl session w-40s">
                                    <div class="font-lg  text-green open-sans center">{this.state.program.programId}:{this.state.program.name} 
                                    </div> 
                                    <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>

                                    <span class="font-xsm text-gray open-sans">{this.state.program.description}</span>
                                </div>
                                <div class=" content-body-lg session">{this.state.sessions.map(session => <div class="w-100 bg-white text-black"><div clas="float-right">

                                        </div><div class="flex-verticald Mulish input-variant-x">SESSION {session.sessionId} <span class="material-symbols-outlined  text-bold  float-right   pointer">
                                                edit 
                                            </span></div>
                                        <div class="flex-vertical  text-bold text-gray">
                                            {session.courses.map(course => <span class=" margin-md font-sm  width-auto text-black pointer float-lefdt border-rad-med padding-sm margin-md center "> <div class="square"></div>{course.name}</span>)}</div> <div class="float-right"><span class="item pointer font-xsm relative" onClick={(e) => this.showCourseRegistration(session.sessionId)}>
                                                New course for this batch
                                            </span></div></div>)}
                                    
                                </div>
                                <div class=" flex-vertical  font-bold">
                                    <div class="word-box session font-sm font-bold flex-horizontal">
                                        <div class="margin-md Mulish"> <span class="btn-variant-2 text-white text-bold">Starts on</span> {new Date().toString()}</div>  
                                        <div class="margin-md float-right text-white"><span class="btn-variant-6 text-white text-bold">Ends on</span> {new Date().toString()}</div>

                                    </div></div> 
                           
                
                            </div>
                        </div>
                
                    </div>
                    <div class='chat'>
                        <span class="material-symbols-outlined  font-lg text-saldmon text-bold  bg-green border-rad-md padding-md text-gray pointer margin-sm" onClick={(e) => this.showSessionRegistration()}>
                            schema
                        </span>            
                        <span class="material-symbols-outlined font-lg text-saldmon text-bold  bg-gray border-rad-md padding-md text-white pointer" onClick={(e) => this.showProgramDelete()}>
                            delete
                        </span> <span class="material-symbols-outlined font-lg text-saldmon text-bold  bg-orange border-rad-md padding-md text-crimson pointer" onClick={(e) => this.showProgramEdit()}>
                            edit
                        </span></div>
                </div>
                );
    }
}
export default Members;