import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MessagesViewport from "./message_viewport";
import { fetchMessages } from "../actions/message_actions";

const msp = (state, ownProps) => {
  return {
    messages: state.entities.messages,
    currentChannelId: ownProps.match.params.channelIds,
  };
};

const mdp = (dispatch) => {
  return {
    fetchMessages: (channelId) => {
      //console.log("FETCH MESSAGES", channelId);
      dispatch(fetchMessages(channelId))
    }
  };
};

export default withRouter(connect(msp, mdp)(MessagesViewport));
