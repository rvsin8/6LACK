import { connect } from "react-redux";
import MessageForm from "./message_form";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.id,
    channelId: ownProps.match.params.channelId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MessageForm)
);
