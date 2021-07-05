import React from "react";

export default class NewMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      channel_id: this.props.channel.id,
      // user_id: this.props.currentUser.id,
      //   user: this.props.currentUser
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (event) => {
      this.setState({
        [type]: event.target.value,
        channel_id: parseInt(this.props.currentChannelId),
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.body !== "") {
      const message = Object.assign(
        {},
        { user_id: this.props.currentUser.id },
        this.state
      );
      console.log("SEND MESSAGE", message);

      this.props.createMessage(message).then((res) => {
        App.cable.subscriptions.subscriptions[0].speak({
          message: res.message,
        });
      });
      this.setState({
        body: "",
      });

      document.getElementById("message-form-input").value = "";
    }
  }

  render() {
    const { channel, currentUser } = this.props;
    console.log("test", this.props);
    let placeholder;

    if (channel.channel_or_dm === "channel") {
      console.log("channel", channel);
      placeholder = `Message #${channel.title}`;
    } else {
      let channelDisplayTitleArray = channel.title.split(",");

      channelDisplayTitleArray.splice(
        channelDisplayTitleArray.indexOf(currentUser.email),
        1
      );

      const channelDisplayTitle = channelDisplayTitleArray.join(", ");

      placeholder = `Message${channelDisplayTitle}`;
    }

    return (
      <div className="message-form-container">
        <form
          id="message-form"
          className="message-form"
          onSubmit={this.handleSubmit}
        >
          <input
            id="message-form-input"
            className="message-form-input"
            placeholder={placeholder}
            type="text"
            autoFocus="on"
            autoComplete="off"
            onChange={this.handleInput("body")}
          />
          <i className="fas fa-paper-plane"></i>
        </form>
      </div>
    );
  }
}
