import {
    CHANNEL_TYPE_REQUESTED,
    CHANNEL_VALUE_REQUESTED,
    CHANNEL_CREATE_REQUESTED,
    CHANNEL_VIEW_REQUESTED,
    CHANNEL_UPDATE_REQUESTED,
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

export const dxChannelView = (experienceChannelGUID) => {
    return {
        type: CHANNEL_VIEW_REQUESTED,
        payload: {
            experienceChannelGUID
        },
    }
}

export const dxChannelUpdate = (experienceChannel) => {
    return {
        type: CHANNEL_UPDATE_REQUESTED,
        payload: {
            experienceChannel
        },
    }
}