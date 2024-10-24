import Nav from './Nav';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LineChart from './LineChart'
import BarChart from './BarChart'
import axios from 'axios';

const label = 'COURSE ENROLLMENT FOR 2023';
const label1 = 'COURSE ENROLLMENT';
class Reports extends React.Component {
    constructor(props) {
        super(props)
        this.state = {enrollment: [5, 0], payments: 0, groupings: [], data: [1, 2], year: 2023, years: []}
        this.onYearChange = this.onYearChange.bind(this);
    }
    componentDidMount() {

        axios.get("enrollment/")
                .then((response) => {
                    this.setState({enrollment: response.data});
                }).catch((err) => {

        });
        axios.get("income/")
                .then((response) => {
                    this.setState({payments: response.data});
                }).catch((err) => {

        });
        axios.get("groupings/")
                .then((response) => {
                    this.setState({groupings: response.data});
                }).catch((err) => {

        });
        axios.get("enrollment/" + this.state.year + "/enrollment/")
                .then((response) => {
                    this.setState({data: response.data});
                }).catch((err) => {

        });
        axios.get("income/years")
                .then((response) => {

                    this.setState({years: response.data});
                }).catch((err) => {

        });

    }
    async onYearChange(event) {
        await  this.setState({year: event.target.value});
        axios.get("enrollment/" + this.state.year + "/enrollment/")
                .then((response) => {
                    this.setState({data: response.data});
                }).catch((err) => {

        });

    }
    render() {
        return(
                <div class="">
                    <Nav/>
                    <div class=" margin-top-sm session ">
                        <div class="">
                            <div class="p-head "><div class="font-xl  margin-top-md Roboto text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">ADMINS</span></div></div>
                
                        </div>
                        <div class=" content-body-xsm play font-xsm  margin-top-xsm">
                            <button to="/blogging/upload" class="btn-variant-2 text-white pointer" id="gethelp-parent">Enrollment <div class="hidden dropdown paddingfsm" id="gethelp">
                
                                    <li class="paddingsm animate-bm">
                                        <Link to="/help" class="w-100">Find Answers</Link>
                                    </li>
                                    <li class="paddingsm animate-bm">
                                        <a class="w-100">Chat now</a>
                                    </li>
                                    <li class="paddingsm animate-bm">
                                        <Link to="/help/query" class="w-100">Email us</Link> 
                                    </li>
                                </div></button>
                            <button to="" class="btn-variant-2 pointer text-white"> Income</button>
                            <Link to="" class="btn-variant-2 text-white">PROGRAM  </Link>
                            <Link to="" class="btn-variant-2 text-white">REPORTS  </Link>
                            <Link to="" class="btn-variant-2 text-white">MESSAGE  </Link>
                
                        </div>
                        <div class="input-variant-x play margin-top-xsm margin-top-xsm bg-variant-2 text-white Mulish">ENROLLMENT for {this.state.year} <div class="float-right"><select class="play input-variant-b" onChange={this.onYearChange} value={this.state.year}>
                                    <option value="">Select Year</option>                    
                                    {this.state.years.map(year => <option class="play" value={year}>{year}</option>)}
                
                
                                </select>
                            </div>
                        </div>
                        <LineChart data={this.state.data} labels={label}/>
                        <div class="input-variant-x play margin-top-xsm margin-top-xsm bg-variant-2 text-white Mulish">YEAR ON YEAR PROGRAM ENROLLMENT</div>
                        <BarChart data={this.state.enrollment} labels={label1}/>
                    </div>
                </div>
                );
    }
}
;
export default Reports;
