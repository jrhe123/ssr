import {
    CHANNEL_TYPE__SUCCEEDED,
    CHANNEL_TYPE_UPDATE__SUCCEEDED,
} from './constants';
import update from '../../../node_modules/immutability-helper';

const initialState = {
    channel: {
        type: '0', // public or private
    },
};

const newchannelReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpChannel = Object.assign({}, updated.channel);

    switch (type) {

        case CHANNEL_TYPE__SUCCEEDED:
            tmpChannel.type = payload.channelType;
            updated.channel = tmpChannel;
            return updated;

        case CHANNEL_TYPE_UPDATE__SUCCEEDED:
            tmpChannel.type = payload.channelType;
            updated.channel = tmpChannel;
            return updated;
        
        default:
            return previousState;
    }
};

export default newchannelReducer;

