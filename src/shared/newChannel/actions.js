import {
    CHANNEL_TYPE_REQUESTED,
    CHANNEL_VALUE_REQUESTED,
    CHANNEL_CREATE_REQUESTED,
    CHANNEL_VIEW_REQUESTED,
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

export const dxChannleView = (experienceChannelGUID) => {
    return {
        type: CHANNEL_VIEW_REQUESTED,
        payload: {
            experienceChannelGUID
        },
    }
}
