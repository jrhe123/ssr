import {
    CHANNEL_TYPE__SUCCEEDED,
    CHANNEL_VALUE__SUCCEEDED,
} from './constants';

const initialState = {
    Channel: {
        ChannelType: '0',  // public or private
        ChannelColor: '#EE2E24',
        ChannelName: '',
        ChannelDescription: '',
    },
};

const newchannelReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpChannel = Object.assign({}, updated.Channel);

    switch (type) {

        case CHANNEL_TYPE__SUCCEEDED:
            tmpChannel.ChannelType = payload.channelType;
            updated.Channel = tmpChannel;
            return updated;

        case CHANNEL_VALUE__SUCCEEDED:
            switch (payload.type) {
                case 'CHANNEL_TYPE':
                    tmpChannel.ChannelType = payload.val;
                    break;
                case 'CHANNEL_COLOR':
                    tmpChannel.ChannelColor = payload.val;
                    break;
                case 'CHANNEL_NAME':
                    tmpChannel.ChannelName = payload.val;
                    break;
                case 'CHANNEL_DESCRIPTION':
                    tmpChannel.ChannelDescription = payload.val;
                    break;
                default:
                    break;
            }
            updated.Channel = tmpChannel;
            return updated;

        default:
            return previousState;
    }
};

export default newchannelReducer;

