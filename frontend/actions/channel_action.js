export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
import * as channelAPI from "../util/channel_api_util";

export const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels,
  };
};

export const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload,
});

export const fetchChannels = () => (dispatch) => {
  return channelAPI
    .fetchChannels()
    .then((res) => dispatch(receiveChannels(res)));
};

export const fetchChannel = (id) => (dispatch) => {
  return channelAPI
    .fetchChannel(id)
    .then((res) => dispatch(receiveChannel(res)));
};

export const createChannel = (channel) => (dispatch) => {
  return channelAPI
    .createChannel(channel)
    .then((res) => dispatch(receiveChannel(res)));
};
