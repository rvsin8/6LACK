import React from "react";
import ChannelSidebarContainer from "./channel_side_container";
import ChannelContainer from "./channel_container";
import SearchBarContainer from "./searchbar_container";
// import MessageContainer from "./new_message_form_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/fontawesome-free-solid";
import Chat from "./chat_room";
// import { faUser } from "@fortawesome/fontawesome-free-solid";



class ChannelViewport extends React.Component {
  constructor(props) {
    super(props);

    //console.log('props in channel viewport', this.props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    const user = {
      email: this.props.currentUser.email,
      id: this.props.currentUser.id,
      online_status: false,
    };
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/');

    /* this.props
      .updateUser(user)
      .then((res) => {
        if (App.cable.subscriptions.subscriptions[1]) {
          App.cable.subscriptions.subscriptions[1].speak({
            user: user,
          });
        }

        return res;
      })
      .then((res) => {
        this.props.logout(res);
      })
      .then(() => {
        App.cable.subscriptions.subscriptions = [];
      }); */
  }

  render() { 

    return (
      <>
        <div id="logged-in-container">
          <div className="search-bar">
            {/*  <div className="search-inner-div" > */}
            {/* <div className="arrow-bar">
              <FontAwesomeIcon icon={faArrowLeft} color="gray" size="lg" />
              <FontAwesomeIcon icon={faArrowRight} color="gray" size="lg" />
            </div> */}
            <SearchBarContainer />

            <p className="sign-out" onClick={this.handleLogout}>>
              <FontAwesomeIcon icon={faSignOutAlt} color="white" size="lg" className="signIcon" />
              &nbsp;Sign Out
  {/*             <FontAwesomeIcon icon={faUser} color="white" size="lg" /> */}
            </p>
            {/*    <i className="fas fa-search">    */}
            {/* <SearchBarContainer/>  */}

            {/*   </i> */}

            {/* </div> */}
            {/* <SearchBarContainer/> */}
            {/* <p className="logout" onClick={this.handleLogout}> */}
            {/* <i className="fas fa-sign-out-alt"></i> */}
            {/* &nbsp;Sign Out */}
            {/* </p>  */}
          </div>
          <div className="channel-viewport">
            <ChannelSidebarContainer currentUser={this.props.currentUser} />
            

            <ChannelContainer/>
            {/* <MessageContainer/> */}
            {/* <Chat /> */}
          </div>
        </div>
      </>
    );
  }
}
export default ChannelViewport;