import {
    CHANNEL_TYPE_REQUESTED,
    CHANNEL_VALUE_REQUESTED,
    CHANNEL_CREATE_REQUESTED,
} from './constants';

export const dxChannelType = (channelType) => {
    return {
        type: CHANNEL_TYPE_REQUESTED,
        payload: {
            channelType
        },
        
    }
}

export const dxChannelValueUpdate = (type, val) => {
    return {
        type: CHANNEL_VALUE_REQUESTED,
        payload: {
            type, 
            val,
        },
    }
}

export const dxChannelCreate = (channel) => {
    return {
        type: CHANNEL_CREATE_REQUESTED,
        payload: {
            channel
        },
    }
}
