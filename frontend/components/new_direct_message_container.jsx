import { connect } from 'react-redux';
import NewDMForm from './new_direct_message_form';
import { createChannel, fetchChannel, clearErrors } from '../actions/channel_action';
import { closeModal } from '../actions/modal_actions';
import { fetchUsers } from '../actions/user_action';
import { fetchMessages } from '../actions/message_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
    const userId = state.session.id ? state.session.id : state.session.user.id;
    return {
        channels: state.entities.channels,
        users: state.entities.users,
        currentUser: userId,
        errors: state.errors.channel,
        // currentUserEmail: state.entities.users[state.session.user.id].email,
        messages: state.entities.messages
    };
};

const mdp = dispatch => {
    return {
        createChannel: channel => dispatch(createChannel(channel)),
        fetchChannel: channel => dispatch(fetchChannel(channel)),
        fetchUsers: () => dispatch(fetchUsers()),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        fetchMessages: (channelId) => dispatch(fetchMessages(channelId))

    };
};

export default withRouter(connect(msp, mdp)(NewDMForm));