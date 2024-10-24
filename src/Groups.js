import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {groups: [], error: ""};
    }
    async componentDidMount() {

        const response = await axios.get("http://161.35.222.102:8080/api/v1/groups")
                .then((response) => {
                    console.log(response);
                    this.setState({groups: response.data});
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });

    }
    render() {

        return(
                <div class="content">
                    <div class="Roboto top-nav"><span class="text-bold font-xl text-salmon">M</span>AJESTICHORSE 1.0</div>
                    <div class="Roboto margin-top-sm">Groups <div class="border-bottom-crimson bg-crimson margin-top-xssm"></div></div>
                    <div class="float-right"><Link to="/groups/create/new"><div class="btn-variant-7 border-rad-md fixed-float"><span class="material-symbols-outlined margin-sm">
                                group_add
                            </span></div></Link></div>
                
                    <div class="three-per-row">
                        {this.state.groups.map(group =>
                                        <Link to={'/groups/' + group.id} class="search">
                                        <div class="  margin-sm ">
                                            <div class="paddidng-sm-fixed">
                                                <p class="font-md text-bold text-white Roboto">{group.groupName}</p>
                                                <div class="clusters">
                                
                                
                                                </div>
                                                <div class="flex-vertical">
                                                    <div>
                                                        <div class="font-xsm float-left "><span class="center"><span class="material-symbols-outlined text-gray">
                                                                    group
                                                                </span>{group.congregants.length}</span></div>
                                                    </div>
                                                    <div>
                                                        <div class="font-xsm  float-left"><span class="center"><span class="material-symbols-outlined text-gray">
                                                                    location_city
                                                                </span>{group.description}</span></div></div>
                                                </div>
                                            </div>  
                                
                                        </div>
                                        <div class="float-right margin-sm-fixed"><span class="material-symbols-outlined">
                                                more_vert
                                            </span></div>
                                        </Link>)}
                    </div>
                </div>
                );
    }
}
export default Groups;

