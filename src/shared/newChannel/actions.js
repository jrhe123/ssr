import {
    CHANNEL_TYPE_REQUESTED,
    CHANNEL_TYPE_UPDATE_REQUESTED,
    CHANNEL_COLOR__REQUESTED,
} from './constants';

export const dxChannelType = (channelType) => {
    return {
        type: CHANNEL_TYPE_REQUESTED,
        payload: {
            channelType
        },
        
    }
}

export const dxChannelTypeUpdate = (channelType) => {
    return {
        type: CHANNEL_TYPE_UPDATE_REQUESTED,
        payload: {
            channelType
        },
    }
}

export const dxChannelColor = (channelColor) => {
    return {
        type: CHANNEL_COLOR__REQUESTED,
        payload: {
            channelColor
        },
    }
}