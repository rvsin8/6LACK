import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashHeaderContainer from "./splash_header_container";
import ChannelViewportContainer from './channel_viewport_container';
import Modal from './modal';
// import Messages from './message_viewport_container';
// import header_container from "./header._container";



const App = () => (
  <div className="top-div">
    <Modal />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SplashHeaderContainer} />
    <Route path="/channels/:channelIds" component={ChannelViewportContainer} />
    {/* <Route path="/messages" component={Messages} /> */}
    {/* <Route path="/channel" component={header_container} /> */}
  </div>
);

export default App;
