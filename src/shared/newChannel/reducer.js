import {
    CHANNEL_TYPE__SUCCEEDED,
    CHANNEL_TYPE_UPDATE__SUCCEEDED,
    CHANNEL_COLOR__SUCCEEDED,
} from './constants';
import update from '../../../node_modules/immutability-helper';

const initialState = {
    CHANNEL: {
        TYPE: '0', // public or private
        COLOR:'#000000'
    },
};

const newchannelReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpChannel = Object.assign({}, updated.CHANNEL);

    switch (type) {

        case CHANNEL_TYPE__SUCCEEDED:
            tmpChannel.TYPE = payload.channelType;
            updated.CHANNEL = tmpChannel;
            return updated;

        case CHANNEL_TYPE_UPDATE__SUCCEEDED:
            tmpChannel.TYPE = payload.channelType;
            updated.CHANNEL = tmpChannel;
            return updated;

        case CHANNEL_COLOR__SUCCEEDED:
            tmpChannel.COLOR = payload.channelColor;
            updated.CHANNEL = tmpChannel;
            return updated;
        
        default:
            return previousState;
    }
};

export default newchannelReducer;

