import Nav from './Nav';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LineChart from './LineChart'
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';
const label = 'COURSE ENROLLMENT FOR 2023';
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {program: [], payments: 0, groupings: [], data: [1, 2], loading: false}
    }
    componentDidMount() {
        this.setState({loading: true});
        axios.get("programs/")
                .then((response) => {
                    this.setState({program: response.data});
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
        axios.get("enrollment/2023/enrollment/")
                .then((response) => {
                    this.setState({data: response.data});
                    this.setState({loading: false});
                }).catch((err) => {

        });

    }
    render() {
        return(
                <>
                {this.state.loading ? <div class="centerpage">
                
                
                    <InfinitySpin
                
                
                        color="crimson"
                        ariaLabel="Infinity-Spin"
                
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        /></div> : <div>
                    <Nav/>
                    <div class=" margin-top-md sessions flex-vertical">
                        <div class="">
                            <div class="p-head "><div class="font-xl  Roboto text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">ADMINS</span></div></div>
                
                        </div>
                        <div class=" session ">
                            <div class="grid-containerd">
                                <div class="content-body-xsm flex-horizontal float-left w-100 font-sm">
                                    <Link to={'/programs/'} class='item   sp bg-white  hover-variant-1'>
                                    <div class="">
                
                                        <div class="padding-sm text-gray center text-bold"><span class=" font-vl material-symbols-outlined">
                                                support_agent
                                            </span><b class="">Tutors</b></div>
                                        <div class="border-bottom-gray"></div>
                                        <p class="padding-sm font-sm text-salmon text-bold Roboto"><span class="material-symbols-outlined">
                                                trending_up
                                            </span>20</p>
                
                
                                    </div></Link>
                                    <Link to={'/programs/'} class='item  bg-white float-left hover-variant-1'>
                                    <div class="">
                
                                        <div class="padding-sm text-gray center"><span class=" font-vl material-symbols-outlined">
                                                subscriptions
                                            </span><b>Enrollment</b></div>
                                        <div class="border-bottom-gray"></div>
                                        <p class="padding-sm font-sm text-salmon text-bold Roboto"><span class="material-symbols-outlined">
                                                trending_up
                                            </span>20</p>
                
                
                                    </div></Link><Link to={'/programs/'} class='item bg-white   float-left hover-variant-1'>
                                    <div class="">
                
                                        <div class="padding-sm text-gray center"><span class=" font-vl material-symbols-outlined">
                                                newspaper
                                            </span><b>Articles</b></div>
                                        <div class="border-bottom-gray"></div>
                                        <p class="padding-sm font-sm text-salmon text-bold Roboto"><span class="material-symbols-outlined">
                                                trending_up
                                            </span>20</p>
                
                
                                    </div></Link><Link to={'/programs/'} class='item  bg-white  float-left hover-variant-1'>
                                    <div class="">
                
                                        <div class="padding-sm text-gray center"><span class="material-symbols-outlined font-vl">
                                                verified_user
                                            </span><b>Programs</b></div>
                                        <div class="border-bottom-gray"></div>
                                        <p class="padding-sm font-sm text-salmon text-bold Roboto"><span class="material-symbols-outlined">
                                                trending_up
                                            </span>20</p>
                
                
                                    </div></Link><Link to={'/income/'} class='item  bg-white float-left hover-variant-1'>
                                    <div class="">
                
                                        <div class="padding-sm text-gray center"><span class="material-symbols-outlined font-vl">
                                                monetization_on
                                            </span><b>Income</b></div>
                                        <div class="border-bottom-gray"></div>
                                        <p class="padding-sm font-sm text-salmon text-bold Roboto"><span class="material-symbols-outlined">
                                                trending_up
                                            </span>{this.state.payments}</p>
                
                
                                    </div></Link>
                
                                    <Link to={'/programs/'} class='item  bg-white float-left hover-variant-1'>
                                    <div class="">
                
                                        <div class="padding-sm text-gray center"><span class="material-symbols-outlined font-vl">
                                                message
                                            </span><b>Messages</b></div>
                                        <div class="border-bottom-gray"></div>
                                        <p class="padding-sm font-sm text-salmon text-bold Roboto"><span class="material-symbols-outlined">
                                                trending_up
                                            </span>1564</p>
                
                
                                    </div></Link>
                                    <Link to={'/programs/'} class='item  bg-white float-left hover-variant-1'>
                                    <div class="">
                
                                        <div class="padding-sm text-gray center"><span class="material-symbols-outlined font-vl">
                                                circle_notifications
                                            </span><b>Notifications</b></div>
                                        <div class="border-bottom-gray"></div>
                                        <p class="padding-sm font-sm text-salmon text-bold Roboto"><span class="material-symbols-outlined">
                                                trending_up
                                            </span>20</p>
                
                
                                    </div></Link>
                                </div>
                
                            </div>
                            <div class="session bg-white">
                                <LineChart data={this.state.data} labels={label}/></div>
                        </div>
                
                
                
                    </div>
                </div>}</>
                );
    }
}
;
export default Home;
