import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import swal from 'sweetalert';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'

import { TailSpin } from 'react-loader-spinner'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", contributor: "", about: "", article: [], loading: false, image: ""};

    }

    async componentDidMount() {
        this.setState({loading: true})
        const response = await axios.get("blog/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({article: response.data});
                    this.setState({image: response.data.headerImage.bigImage});
                    this.setState({loading: false})


                }).catch((err) => {
        });


    }

    render() {
        if (this.state.loading === true) {

            return(
                    <div class="centerpage">
                        <TailSpin
                            height="120"
                            width="120"
                            color="crimson"
                            ariaLabel="tail-spin-loading"
                            radius="3"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            />
                    </div>)
        } else
            return(
                    <div class="margin-top-md" id="sheets">
                        <Nav/>
                        <div class="">
                            <div class="article-header-sm margin-top-" style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + this.state.image})`}}><div class="font-xl Roboto text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">BLOGS</span></div></div>
                            <div class="session font-sms padding-md" >
                             <Link to="/blogging/upload" class="" ><button class="border-none  outline-none margin-top-xsm padding-xsm  bg-yellow text-white">De-publish</button>  </Link>  <Link to="/blogging/upload" class="" ><button class="border-none session outline-none margin-top-xsm padding-xsm badge  text-white">Edit</button>  </Link> 
                                <h2 class="play" >{this.state.article.title}</h2>
                                <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                                            
                                <p class="font-xsm text-green open-sans">{this.state.article.contributor} | {this.state.article.date}</p>
                                <div class="open-sans text-yellow">
                                <ReactMarkdown children={this.state.article.body} remarkPlugins={[remarkGfm]} />   </div>           
                    
                            </div>
                    
                        </div>
                    
                    </div>
                    );
    }
}
export default Article;



