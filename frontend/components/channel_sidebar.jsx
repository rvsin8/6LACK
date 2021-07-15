import React from "react";
import ChannelSidebarItem from "./channel_side_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/fontawesome-free-solid";
import { faCaretDown } from "@fortawesome/fontawesome-free-solid";
import { faCircle } from "@fortawesome/fontawesome-free-solid";
import { faPlus } from "@fortawesome/fontawesome-free-solid";

class ChannelSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      channel_type: "",
      channels_open: true,
      dm_open: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleChannels = this.toggleChannels.bind(this);
    this.toggleDms = this.toggleDms.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchChannels();
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const channel = Object.assign({}, this.state);
    this.props.createChannel(channel);
  }

  toggleChannels() {
    const temp = this.state.channels_open;
    this.setState({ channels_open: !temp });

    const channelsUl = document.getElementById("channels-ul");

    if (channelsUl.style.display === "none") {
      channelsUl.style.display = "block";
    } else {
      channelsUl.style.display = "none";
    }

    const caret = document.getElementById("channels-caret");

    caret.classList.toggle("caret-toggled");
  }

  toggleDms() {
    const currentState = this.state.dm_open;
    this.setState({ dm_open: !currentState });

    const dmsUl = document.getElementById("dms-ul");

    if (dmsUl.style.display === "none") {
      dmsUl.style.display = "block";
    } else {
      dmsUl.style.display = "none";
    }

    const caret = document.getElementById("dms-caret");

    caret.classList.toggle("caret-toggled");
  }

  render() {
    this.channelsArray = Object.values(this.props.channels).sort((a, b) => {
      const aTitle = a.title.toUpperCase();
      const bTitle = b.title.toUpperCase();
      if (aTitle < bTitle) {
        return -1;
      } else if (aTitle > bTitle) {
        return 1;
      } else return 0;
    });

    return (
      <div className="channels-wrapper">
        <div className="workspace-box">
          <p>
            Your Workspace&nbsp;&nbsp;
            <FontAwesomeIcon icon={faChevronDown} color="white" size="6x" />
            {/* <i className="fas fa-chevron-down"></i> */}
          </p>
          <p className="logged-in-name">
            {/* <i className="fas fa-circle" /> */}
            {/* <FontAwesomeIcon
              icon={faCircle}
              color="green"
              size="xs"
              className="circle"
            /> */}
            6lack
          </p>

          <div className="user-name">
            <i className="fas fa-circle" />
            {/* &nbsp;{this.props.currentUser.email} */}
          </div>
        </div>

        <div className="channels">
          <div className="channels-toogle">
            <div className="channels-header">
              {/* <i id="channels-caret" className="fas fa-caret-down"></i> */}

              <button
                className="channels-toggle-button"
                onClick={this.toggleChannels}
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  color="white"
                  size="lg"
                  className={`circle ${
                    this.state.channels_open ? null : "closed"
                  }`}
                />
                Channels
              </button>

              <a onClick={() => this.props.openModal("addChannel")}>
                {/* <i className="fas fa-plus channel-fa-plus"></i> */}
                <FontAwesomeIcon
                  icon={faPlus}
                  color="white"
                  size="lg"
                  className="channel-fa-plus"
                />
              </a>
            </div>

            <ul id="channels-ul" className="channels-ul">
              {this.channelsArray.map((channel) => {
                let userIds = channel.users.map((user) => user.id);

                // const currentUserIsMember = userIds.includes(
                //   this.props.currentUser.id
                // );

                if (channel.channel_or_dm === "channel") {
                  return (
                    <ChannelSidebarItem
                      key={channel.id}
                      channel={channel}
                      currentChannelId={this.props.currentChannelId}
                      currentUser={this.props.currentUser}
                    />
                  );
                }
              })}
            </ul>
          </div>

          <div className="channels-toogle">
            <div className="channels-header">
              {/* <i id="dms-caret" className="fas fa-caret-down"></i> */}

              <button className="dms-toggle-button" onClick={this.toggleDms}>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  color="white"
                  size="lg"
                  className={`circle ${this.state.dm_open ? null : "closed"}`}
                />
                Direct messages
              </button>

              <a onClick={() => this.props.openModal("addDM")}>
                <FontAwesomeIcon
                  icon={faPlus}
                  color="white"
                  size="lg"
                  className="dm-fa-plus"
                />
                {/* <i className="fas fa-plus dm-fa-plus"></i> */}
              </a>
            </div>

            <ul id="dms-ul" className="dms-ul">
              {this.channelsArray.map((channel) => {
                let userIds = channel.users.map((user) => user.id);

                // const currentUserIsMember = userIds.includes(
                //   this.props.currentUser.id
                // );

                // const channelDisplayTitle = channel.title.split(', ').filter(user => user !== this.props.currentUser.email).join(", ");

                const onlineUsers = Object.values(this.props.users)
                  .filter((user) => user.online_status)
                  .map((user) => user.email);

                // const onlineStatus = onlineUsers.includes(channelDisplayTitle);

                if (channel.channel_or_dm === "dm") {
                  return (
                    <ChannelSidebarItem
                      key={channel.id}
                      channel={channel}
                      currentChannelId={this.props.currentChannelId}
                      currentUser={this.props.currentUser}
                      //onlineStatus={onlineStatus}
                    />
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelSidebar;
