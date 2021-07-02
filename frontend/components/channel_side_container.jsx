import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchChannels,fetchChannel,createChannel,updateChannel,deleteChannel} from '../actions/channel_action'; //rework actions
import {fetchUsers} from '../actions/user_action';
import { openModal } from '../actions/modal_actions'; //rework
import ChannelSidebar from './channel_sidebar';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.user.id],
        channels: state.entities.channels,
        currentChannelId: ownProps.match.params.channelIds,
        users: state.entities.users
    };
};

const mdp = dispatch => {
    return {
        fetchChannels: () => dispatch(fetchChannels()),

        createChannel: channel => dispatch(createChannel(channel)),

        fetchChannel: channel => dispatch(fetchChannel(channel)),

        updateChannel: channel => dispatch(updateChannel(channel)),

        deleteChannel: channel => dispatch(deleteChannel(channel)),

        logout: () => dispatch(logout()),

        openModal: modal => dispatch(openModal(modal)),

        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default withRouter(connect(msp, mdp)(ChannelSidebar));