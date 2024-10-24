import Home from './Home';
import Enrollment from './Enrollment';
import Programs from './Programs';
import Nav from './Nav';
import Article from './Article';
import Groups from './Groups';
import Notifications from './Notifications';
import BlogContainer from './BlogContainer';
import SetAuthToken from './SetAuthToken';
import RouteGuard from './RouteGuard';
import Login from './AdminLogin';
import Logout from './Logout';
import ProgramService from './ProgramService';
import ImageUpload from './ImageUpload';
import AddMemberToGroup from './AddMemberToGroup';
import Inbox from './Inbox';
import Tutor from './Tutor';
import Upload from './Upload';
import Income from './Income';
import Reports from './Reports';
import CreateProgram from './CreateProgram';

import {BrowserRouter as Router, Route, Routes, Switch, withRouter}
from 'react-router-dom';

function App() {
    const token = localStorage.getItem("Admintoken");
    if (token) {
        SetAuthToken(token);
    }
    return (
            <div className="App">
    
                <Router>
            
                    <Switch>
                    <RouteGuard exact path="/" component={Home}/>
                    <RouteGuard exact path="/blogging/Upload" component={Upload}/>
                    <RouteGuard exact path="/home" component={Home}/>
                    <RouteGuard exact path="/notifications" component={Notifications}/>
                    <RouteGuard exact path="/enrollment" component={Enrollment}/>
                    <RouteGuard exact path="/programs" component={Programs}/>
                    <RouteGuard exact path="/programs/action/register" component={CreateProgram}/>
                    <RouteGuard exact path="/programs/:id" component={ProgramService}/>
                    <RouteGuard exact path="/blogging" component={BlogContainer}/>
                    <RouteGuard exact path="/inbox" component={Inbox}/>
                    <RouteGuard exact path="/blogging/article/:id" component={Article}/>
                    <RouteGuard exact path="/tutors" component={Tutor}/>
                    <RouteGuard exact path="/income" component={Income}/>
                    <RouteGuard exact path="/reports" component={Reports}/>
                    <Route exact path="/administration/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    </Switch>
                </Router>
            </div>
            );
}

export default App;
