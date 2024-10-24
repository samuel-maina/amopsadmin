import Nav from './Nav';
import React from 'react';
import ImageUpload from './ImageUpload';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button, Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import swal from 'sweetalert';
import axios from 'axios';
class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: "", contributor: "", about: "", articles: [], body: "", step: 0};
        this.handleContributorChange = this.handleContributorChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.submit = this.submit.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
    }
    nextStep() {
        this.setState({step: 1})
    }
    previousStep() {}
    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }
    handleContributorChange(event) {
        this.setState({contributor: event.target.value});
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
       handleAboutChange(event) {
        this.setState({about: event.target.value});
    }

    submit(event) {
        event.preventDefault();
        var blog = {title: this.state.title, contributor: this.state.contributor, body: this.state.body,about:this.state.about,id:""}
        axios.post("blog/", blog)
                .then((response) => {
                    this.setState({title: ""});
                    this.setState({contributor: ""});
                    this.setState({about: ""});
                    this.setState({body:""});
                    this.setState({id:response.data.id})
                    this.nextStep();
                }).catch((err) => {
        });
    }
    render() {
        return(
                <div class=" margin-top-md">
                    <Nav/>
                    <div class="session">
                        <div class="p-head "><div class="font-xl  margin-top-sm Roboto text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">BLOGS</span></div></div>
                        <div class="input-variant-x margin-top-xsm bg-variant-2 text-white Mulish">New Publication
                        </div> 
                        <div class="sessions">
                            <div class="grid-form-container">
                            <div  class='stepper'>
                                            <Stepper activeStep={this.state.step} orientation='vertical'>
                                                <Step>
                                                    <StepLabel>Upload article details</StepLabel>
                                                </Step>
                                                <Step>
                                                    <StepLabel>Upload Image</StepLabel>
                                                </Step>
                                                <Step>
                                                    <StepLabel>Publish</StepLabel>
                                                </Step>
                                            </Stepper>
                                        </div>
                                        {this.state.step === 0 ?
                                <form onSubmit={this.submit} class="flex-vertical  forms ">
                                    <div class=''>
                                        
                                        <div class='formss  flex-vertical'>
                                             <div class='flex-vertical'>
                                                <span class="Mulish font-lg">Input Article Information</span>
                                                <p class='Poppins center font-sm'><span class="material-symbols-outlined">
                                                        pages
                                                    </span>Article title*</p>
                                                <input type='text' placeholder='Article title' class='input' value={this.state.title} onChange={this.handleTitleChange}/>
                                                <p class='Poppins center font-sm'><span class="material-symbols-outlined">
                                                        person
                                                    </span>Author*</p>
                                                <input type='text' placeholder='Article Author' class='input' value={this.state.contributor} onChange={this.handleContributorChange}/>
                                                  <p class='Poppins center font-sm'><span class="material-symbols-outlined">
                                                        density_small
                                                    </span>Overview*</p>                     
                                                <input  type="text" id="" value={this.state.about}  class=" input-variant-x border-rad-dmd form-insput  margin-sm-fixed" required onChange={this.handleAboutChange} placeholder="Understand where the development world is headed in this AI world" />                                    
                                                <p class='Poppins center font-sm'><span class="material-symbols-outlined">
                                                        article
                                                    </span>Body*</p>
                                                <textarea class='input' value={this.state.body} onChange={this.handleBodyChange}></textarea>
                                                <button class='flag-button pointer center btn-variant-1 font-xsm play center text-white float-right' > Next <span class="material-symbols-outlined">
                                                        keyboard_double_arrow_right
                                                    </span></button>
                                            </div> 
                
                                        </div>
                                    </div> 
                
        </form>:<div class="forms" ><ImageUpload article={this.state.id}/></div>}
                
                            </div> 
                
                        </div>
                    </div>
                </div>);
    }
}
;
export default Upload;

