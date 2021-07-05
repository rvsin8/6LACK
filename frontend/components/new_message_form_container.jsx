import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createMessage } from "../actions/message_actions";

import NewMessageForm from "./new_message_form";

const msp = (state, ownProps) => {
  return {
    currentChannelId: ownProps.match.params.channelIds,
    currentUser: state.entities.users[state.session.user.id],
    channel: state.entities.channels[ownProps.match.params.channelIds],
  };
};

const mdp = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message)),
  };
};

export default withRouter(connect(msp, mdp)(NewMessageForm));
