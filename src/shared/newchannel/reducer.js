import {
    CHANNEL_TYPE__SUCCEEDED,
    CHANNEL_VALUE__SUCCEEDED,
    CHANNEL_CREATE__SUCCEEDED,
    CHANNEL_VIEW__SUCCEEDED,
    CHANNEL_UPDATE__SUCCEEDED,
} from './constants';

const defaultChannel = {
    ChannelType: '0',  // public or private or invitation
    ChannelColor: '#EE2E24',
    ChannelName: '',
    ChannelDescription: '',
    ChannelCode: '',
}

const initialState = {
    IsCompleted: false,
    Channel: Object.assign({}, defaultChannel),
}

const newchannelReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpChannel = Object.assign({}, updated.Channel);

    switch (type) {

        case CHANNEL_TYPE__SUCCEEDED:
            tmpChannel.ChannelType = payload.channelType;
            updated.Channel = tmpChannel;
            updated.IsCompleted = false;
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
                case 'CHANNEL_CODE':
                    tmpChannel.ChannelCode = payload.val;
                    break;
                default:
                    break;
            }
            updated.Channel = tmpChannel;
            return updated;

        case CHANNEL_CREATE__SUCCEEDED:
            updated.Channel = Object.assign({}, defaultChannel);
            updated.IsCompleted = true;
            return updated;

        case CHANNEL_VIEW__SUCCEEDED:
            updated.Channel = payload.experienceChannel;
            updated.IsCompleted = false;
            return updated;

        case CHANNEL_UPDATE__SUCCEEDED:
            updated.IsCompleted = true;
            return updated;

        default:
            return previousState;
    }
};

export default newchannelReducer;

