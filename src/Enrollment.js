import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state = {years: [], months: [], month: 0, year: 0, students: [], programs: [], courses: [], session: 0,program:""};
        this.onYearChange = this.onYearChange.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleProgramChange = this.handleProgramChange.bind(this);
         
        this.showProfile= this.showProfile.bind(this);
        this.hideProfile = this.hideProfile.bind(this);
    }
    showProfile(){
        document.getElementById("profile").style.display='block';
    }
        hideProfile(){
        document.getElementById("profile").style.display='none';
    }
    async componentDidMount() {
        await axios.get( "programs/")
                .then((response) => {
                    this.setState({programs: response.data});
                }).catch((err) => {

        });
        await axios.get("income/years")
                .then((response) => {

                    this.setState({years: response.data});
                }).catch((err) => {

        });
        await axios.get("income/months")
                .then((response) => {

                    this.setState({months: response.data});
                }).catch((err) => {

        });
        await this.submit();
    }
    async onYearChange(event) {
        await  this.setState({year: event.target.value});
        console.log(event.target.value);
        await this.submit();
    }
    async  onMonthChange(event) {
        await this.setState({month: event.target.value});
        await this.submit();
    }
    async  submit() {


        await axios.get("enrollment/" + this.state.year + "/" + this.state.month+"/"+this.state.program)
                .then((response) => {
                    this.setState({students: response.data});
                }).catch((err) => {
        });
    }

    async handleProgramChange(event) {
        await this.setState({program: event.target.value});
        await this.submit();
    }
    render() {

        return(
                <div class="margin-top-md">
                    <Nav/>
                    <div class="overlay" id="profile">
                                <div class="form2 padding-md  p bg-white">
                                    <span class="material-symbols-outlined float-lefts pointer close" onClick={this.hideProfile}>
                                        close
                                    </span>
                                    <div class="grid-container-2s">
                                        <div class="aside2  center  ">
                                            <div class="profile"></div> </div>
                                        <div class="main-content-2">
                                            <div class="font-vl    open-sans"> 
                
                                                <div class="">Samuel Maina</div>
                                            </div> 
                                            <div class=" center grid-container-2s   open-sans"> 
                                                <div class="aside2 text-gray center">
                                                    <span class="material-symbols-sharp  ">
                                                        location_on
                                                    </span> </div>
                                                <div class="font-sm main-content-2 open-sans">Kenyan</div>
                                            </div> 
                                            <div class=" center grid-container-2s   open-sans"> 
                                                <div class="aside2 text-gray center">
                                                    <span class="material-symbols-sharp  ">
                                                        mail
                                                    </span> </div>
                                                <div class="font-sm main-content-2 open-sans">javadev@samuelmaina.com</div>
                                            </div> 
                
                                            <div class=" center grid-container-2s   open-sans"> 
                                                <div class="aside2 text-gray center">
                                                    <span class="material-symbols-sharp  ">
                                                        phone
                                                    </span> </div>
                                                <div class="font-sm main-content-2 open-sans"> +254 020 8152 149</div>
                                            </div>  
                
                                            <div class=" margin-top-md margin-sm text-gray"> <div class="center font-xsm btn-variant-5"> <span class="material-symbols-sharp center  text-green border-rad-md">
                                                        send
                                                    </span> Start a conversation with Samuel</div></div>
                                        </div>
                
                
                                    </div>
                                    <div class="main-contentd"><span class="font-lg Roboto">About me</span>
                                        <div class="Mulish">The eldest daughter of a jeweler, Jolie (1896–1997),[1] and a soldier, Vilmos Gábor (1881–1962), she was born in 1915 in Budapest. Her parents were both from Jewish families.[2][3][4] She is listed in Hungary: Jewish Names from the Central Zionist Archives, under her first married name, as "Magda Bychowsky".[5]
                
                                            During World War II, Gabor was reported to have been the fiancée of the Portuguese ambassador to Hungary, Carlos Sampaio Garrido;[6] another source claims she was his mistress and another claims she was his aide.[7][8][9] After she fled to Portugal in 1944, following the Nazi occupation of Hungary, and, with Sampaio's assistance, she was reportedly the mistress of a Spanish nobleman, José Luis de Vilallonga.[10] Gabor arrived in the United States in February 1946, from Natal, Brazil. Within a year of her arrival she married an American citizen, William Rankin, and remained in the country.[5] </div>
                                    </div>
                                    <p>Classes</p>
                                    <div class="center font-sm open-sans">
                                        <div class="square"></div>International Shipping</div>
                                    <div class="chat">close</div>
                                </div>
                            </div>
                    <div class="session">
                        <div class="p-head "><div class="font-xl  margin-top-sm Roboto text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">ENROLLMENT</span></div></div>
                
                        <div class="input-variant-x margin-top-xsm bg-variant-2 text-white Mulish">Enrollment
                            <div class="float-right"> <select class="play input-variant-b" value={this.state.program} onChange={this.handleProgramChange}>
                                    <option >Please select a program below</option>   
                                    {this.state.programs.map(program =>
                                        <option value={program.id} default>{program.name}</option>
                                                )}
                                </select>  
                                <select class="play input-variant-b" onChange={this.onYearChange} value={this.state.year}>
                                    <option value="">Select Year</option>                    
                                    {this.state.years.map(year => <option class="play" value={year}>{year}</option>)}
                
                
                                </select>
                
                                <select class="play input-variant-b margin-sms" onChange={this.onMonthChange} value={this.state.month}>
                                    <option value="">All Select Month</option>                  
                                    {this.state.months.map(month => <option class="play" value={month}>{month}</option>)}
                                </select>
                            </div>
                        </div> 
                <div class="content-body-sm">
                {this.state.students.map(student=>
                            <div class="tutor pointer flex-vertical p max-width-20 input-varianjt-x center">
                                    <div class="profile center"></div>        
                                    <p class="play">{student.firstname} {student.lastname}</p>
                                    <div class="center Mulish btn-variant-5" onClick={this.showProfile}>  <span class="material-symbols-sharp">
                                            aspect_ratio
                                        </span><span class="font-sm">Profile</span></div>
                                </div>)}
                    </div>
                    </div>
                </div>
                );
    }
}
export default Group;



