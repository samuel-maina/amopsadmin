import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import swal from 'sweetalert';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
import ReactCrop from 'react-image-crop'
import { TailSpin } from 'react-loader-spinner'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class BlogContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", contributor: "", about: "", articles: [], body: "", loading: false};
        this.handleContributorChange = this.handleContributorChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
        this.submit = this.submit.bind(this);
        this.showCreateBlog = this.showCreateBlog.bind(this);
        this.hideCreateBlog = this.hideCreateBlog.bind(this);
    }
    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }
    showCreateBlog() {
        document.getElementById("create-article").style.display = "block";
    }
    hideCreateBlog() {
        document.getElementById("create-article").style.display = "none";
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
    async componentDidMount() {
        this.setState({loading: true});
        const response = await axios.get("blog/")
                .then((response) => {
                    this.setState({articles: response.data});
                    this.setState({loading: false});
                }).catch((err) => {
        });
    }
    submit(event) {
        event.preventDefault();
        var blog = {title: this.state.title, contributor: this.state.contributor, about: this.state.about, body: this.state.body}
        axios.post("blog/", blog)
                .then((response) => {
                    this.componentDidMount();
                    this.setState({title: ""});
                    this.setState({contributor: ""});
                    this.setState({about: ""});
                    swal("", "", "success");
                    document.getElementById("create-article").style.display = "none";
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
                    <div class="margin-top-md">
                        <Nav/>
                        <div class="">
                        <div class="p-head "><div class="font-xl  margin-top-sm Roboto text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">BLOGS</span></div></div>
                       
                            <Link to="/blogging/upload" class="" ><button class="border-none session outline-none margin-top-xsm padding-sm bg-variant-1 bg-yellow text-white">Publish a new article</button>  </Link>        
                
                        <div class="content-body-md session margin-top-xsmd">
                            {this.state.articles.map(article => <Link to={'blogging/article/' + article.id} class=" bg-white pd pointer">
                            <div class="article-header-sm" style={{backgroundImage: `url(${'http://104.248.113.144:3030/'+article.headerImage.smallImage})`}}></div>                
                            <div class="padding-md">
        <span class="open-sans font-lg bg-crimson text-white "><u>{article.title}</u></span>
                            <p class="font-xsm text-green">{article.contributor} | {article.date}</p>
                            <div class="border-bottom-gold"></div>
                            <div class="font-md prompt text-gray"><u>{article.about}</u></div>
                            </div>
                            </Link>)}
                        </div>
                           
                            </div>
                    </div>
                    );
    }
}
export default BlogContainer;



