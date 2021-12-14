import { connect } from "react-redux";

import MessageItem from "./message_item";

import { updateMessage, fetchMessages } from "../actions/message_actions";

const msp = (state) => {
  console.log("message item container state", state);
  const userId = state.session.id ? state.session.id : state.session.user.id;
  return {
    currentUserId: state.entities.users[userId].id,
  };
};

const mdp = (dispatch) => {
  return {
    updateMessage: (message) => dispatch(updateMessage(message)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  };
};

export default connect(msp, mdp)(MessageItem);
