import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
const url = 'http://localhost:8080/api/v1'
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notifications: [], error: ""};

    }
    async componentDidMount() {

        const response = await axios.get(url+"/notifications/")
                .then((response) => {

                    this.setState({notifications: response.data});
                }).catch((err) => {
        });

    }
    showNotifications() {
        if (document.getElementById("notifications").style.display === "block")
        {
            document.getElementById("notifications").style.display = "none";
        } else
            document.getElementById("notifications").style.display = "block";
    }
    render() {

        return (
                <div className="top-nav bg-white Ubuntu">
                    <Link to="/">
                    <img src="images/amops.png" width="130px" class="paddingsm float-left"/>
                    </Link>
                    <div class=" float-right flex-horizontal center">
                    <div>
                        <NavLink to="/home" activeClassName="selected-2" className='nav-item  font-md text-green poppins font-sm' >
                            <div>
                                <div className='' title="Data&Reports">
                
                
                                </div>
                                Home
                            </div>
                        </NavLink>
                
                        <NavLink to="/tutors" activeClassName="selected-2" className='nav-item text-gray font-xsm' >
                            <div>
                                <div className='' >
                
                
                                </div>
                                TUTORS
                            </div>
                        </NavLink>
                
                        <NavLink to="/enrollment" activeClassName="selected-2" className='nav-item text-gray font-xsm' >
                            <div>
                                <div className='' title="Data&Reports">
                
                
                                </div>
                                ENROLLMENT
                            </div>
                        </NavLink>
                
                        <NavLink to="/blogging" activeClassName="selected-2" className='nav-item  text-gray font-xsm' >
                            <div>
                                <div className='' title="Data&Reports">
                
                
                                </div>
                                BLOGGING
                            </div>
                        </NavLink>
                
                        <NavLink to="/programs" activeClassName="selected-2" className='nav-item text-gray font-xsm' >
                            <div>
                                <div className='' title="Data&Reports">
                
                
                                </div>
                                PROGRAMS AND COURSES
                            </div>
                        </NavLink>
                <NavLink to="/income" activeClassName="selected-2" className='nav-item text-gray font-xsm' >
                            <div>
                                <div className='' title="Data&Reports">
                
                
                                </div>
                                PAYMENTS
                            </div>
                        </NavLink>
                        <NavLink to="/reports" activeClassName="selected-2" className='nav-item text-gray font-xsm' activeClassName="selected-2" >
                            <div>
                                <div className='' title="Data&Reports">
                
                
                                </div>
                                REPORTS
                            </div>
                        </NavLink>
                        
                
                        <NavLink to="/inbox" activeClassName="selected-2" className='nav-item text-gray font-xsm' >
                            <div>
                                <div className='' title="Data&Reports">
                
                
                                </div>
                                INBOX
                            </div>
                        </NavLink>
                        </div>
                <div class=" nav-item" onClick={this.showNotifications}>
                <div class="relative center flex-horizontal">
                <div class="profile-xsm"></div>
                <div class="font-xsm text-gray"> samuel maina</div> <span class="material-symbols-outlined text-gray font-md">
                    expand_more
                    </span>
                    <div className='text-gray absolute border-rad-md notifications' id="notifications">
                                            <Link to="/update-info" class="play font-sm margin-md pointer text-gray center bg-white padding-sm"> <span class="material-symbols-outlined">
                                                manage_accounts
                                            </span>Update info</Link>
                                            <div class="play font-sm margin-md pointer"></div>
                                            <NavLink to="/logout" activeClassName="selected-2" className='play margin-md font-sm center text-gray bg-white padding-sm' > <span class="material-symbols-outlined">
                                                    exit_to_app
                                                </span>Sign out</NavLink>
                                        </div></div></div>
                
                    </div>
                
                
                </div>
                        );
            }
        }
        export default Nav;