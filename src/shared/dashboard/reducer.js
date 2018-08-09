import {
    DASHBOARD_NAVI__SUCCEEDED,

    // channel
    CHANNEL_FETCH__SUCCEEDED,
    CHANNEL_UPDATE_STATUS__SUCCEEDED,
    // experience
    HTML_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH__SUCCEEDED,
    EXPERIENCE_DELETE__SUCCEEDED,
    // stream
    STREAM_CHANNEL_FETCH__SUCCEEDED,
    STREAM_CHANNEL_SELECT__SUCCEEDED,
    STREAM_CREATE__SUCCEEDED,
} from './constants';

// helpers
import {
    find_experience_obj_by_guid,
    find_page_obj_by_guid,
    find_section_obj_by_guid,

    find_experience_channel_obj_by_guid,
} from '../helpers';

const initialState = {
    NaviIndex: 0,

    TotalExperienceRecord: 0,
    Experiences: [],

    TotalChannelRecord: 0,
    ExperienceChannels: [],

    TotalStreamActiveChannelRecord: 0,
    StreamActiveChannels: [],

    CurrentStreamChannel: {},
    TotalLiveExperienceStreamRecord: 0,
    LiveExperienceStreams: [],
    TotalPendingExperienceRecord: 0,
    PendingExperiences: [],
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpExperiences = Object.assign([], updated.Experiences);
    let tmpExperienceChannels = Object.assign([], updated.ExperienceChannels);
    let tmpPendingExperiences = Object.assign([], updated.PendingExperiences);
    let tmpLiveExperienceStreams = Object.assign([], updated.LiveExperienceStreams);

    let tmpExperience;
    let tmpPage;
    let tmpSection;

    let tmpExperienceChannel;

    switch (type) {

        case DASHBOARD_NAVI__SUCCEEDED:
            updated.NaviIndex = payload.index;
            return updated;

        case HTML_FETCH__SUCCEEDED:
            tmpExperience = find_experience_obj_by_guid(updated.Experiences, payload.experienceGUID);
            tmpPage = find_page_obj_by_guid(tmpExperience.experience.ExperiencePages, payload.pageGUID);
            tmpSection = find_section_obj_by_guid(tmpPage.page.Sections, payload.sectionGUID);
            tmpPage.page.Sections[tmpSection.index].HtmlContent = payload.html;
            tmpExperiences[tmpExperience.index] = tmpExperience.experience;
            updated.Experiences = tmpExperiences;
            return updated;

        case CHANNEL_FETCH__SUCCEEDED:
            updated.TotalChannelRecord = payload.totalRecord;
            updated.ExperienceChannels = payload.expereienceChannels;
            return updated;

        case CHANNEL_UPDATE_STATUS__SUCCEEDED:
            tmpExperienceChannel = find_experience_channel_obj_by_guid(updated.ExperienceChannels, payload.experienceChannel.ExperienceChannelGUID);
            tmpExperienceChannels[tmpExperienceChannel.index] = Object.assign({}, payload.experienceChannel);
            updated.ExperienceChannels = tmpExperienceChannels;
            return updated;

        case EXPERIENCE_FETCH__SUCCEEDED:
            updated.TotalExperienceRecord = payload.totalRecord;
            updated.Experiences = payload.experiences;
            return updated;

        case EXPERIENCE_DELETE__SUCCEEDED:
            tmpExperience = find_experience_obj_by_guid(updated.Experiences, payload.experienceGUID);
            tmpExperiences.splice(tmpExperience.index, 1);
            updated.Experiences = tmpExperiences;
            updated.TotalExperienceRecord = updated.TotalExperienceRecord - 1;
            return updated;

        case STREAM_CHANNEL_FETCH__SUCCEEDED:
            updated.TotalStreamActiveChannelRecord = payload.totalRecord;
            updated.StreamActiveChannels = payload.expereienceChannels;
            updated.CurrentStreamChannel = {};
            if (!payload.expereienceChannels[0]) updated.CurrentStreamChannel = {};                
            return updated;

        case STREAM_CHANNEL_SELECT__SUCCEEDED:
            updated.CurrentStreamChannel = Object.assign({}, payload.channel);
            updated.TotalLiveExperienceStreamRecord = payload.liveExperienceStreams.TotalRecord;
            updated.LiveExperienceStreams = Object.assign([], payload.liveExperienceStreams.ExperienceStreams);
            updated.TotalPendingExperienceRecord = payload.pendingExperiences.TotalRecord;
            updated.PendingExperiences = Object.assign([], payload.pendingExperiences.Experiences);
            return updated;

        case STREAM_CREATE__SUCCEEDED:
            tmpExperience = find_experience_obj_by_guid(updated.PendingExperiences, payload.experience.ExperienceGUID);
            tmpPendingExperiences.splice(tmpExperience.index, 1);
            tmpLiveExperienceStreams.unshift(tmpExperience.experience);
            updated.PendingExperiences = tmpPendingExperiences;
            updated.LiveExperienceStreams = tmpLiveExperienceStreams;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
