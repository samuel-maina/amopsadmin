import Nav from './Nav';
import React from 'react';
import axios from 'axios';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notifications: [], error: ""};

    }
    async componentDidMount() {

        const response = await axios.get("notifications/")
                .then((response) => {

                    this.setState({notifications: response.data});
                }).catch((err) => {


            this.setState({error: err.response.data});
        });

    }
    render() {
        return(
                <div class="">
                    <Nav/>
                    <div class="content-body margin-top-sm session ">
                        <div class="program-header"><div class="font-xl  margin-top-md Roboto text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">NOTIFICATIONS</span></div></div>
        <div class="input-variant-x margin-top-xsm bg-variant-2 text-white Mulish">Notifications
                             </div>                
        <div class="">
                        {this.state.notifications.map(notification=><div class="Mulish  sqsuare padding-md font-sm bg-silver margin-sm"> <span class="material-symbols-outlined crimson-text font-lg">
circle_notifications
</span>{notification.message}<div class="float-right bg-crimson play padding-sm text-white text-bold">{notification.date}</div></div>)}
                </div>
                    </div>
                </div>);
    }
}
;
export default Notifications;
    