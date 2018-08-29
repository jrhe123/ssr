import {
    DASHBOARD_NAVI__SUCCEEDED,

    // channel
    CHANNEL_UPDATE_SEARCH__SUCCEEDED,
    CHANNEL_UPDATE_FILTER__SUCCEEDED,
    CHANNEL_CLEAR_FILTER__SUCCEEDED,
    CHANNEL_FETCH__SUCCEEDED,
    CHANNEL_UPDATE_STATUS__SUCCEEDED,
    // experience
    HTML_FETCH__SUCCEEDED,
    EXPERIENCE_UPDATE_SEARCH__SUCCEEDED,
    EXPERIENCE_UPDATE_FILTER__SUCCEEDED,
    EXPERIENCE_CLEAR_FILTER__SUCCEEDED,
    EXPERIENCE_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH_MORE__SUCCEEDED,
    EXPERIENCE_DELETE__SUCCEEDED,
    // stream
    STREAM_CHANNEL_FETCH__SUCCEEDED,
    STREAM_CHANNEL_SELECT__SUCCEEDED,
    STREAM_CREATE__SUCCEEDED,
    STREAM_REMOVE__SUCCEEDED,
} from './constants';

// helpers
import {
    find_experience_obj_by_guid,
    find_page_obj_by_guid,
    find_section_obj_by_guid,

    find_experience_channel_obj_by_guid,
    find_experience_stream_obj_by_guid,
} from '../helpers';

const initialState = {
    NaviIndex: 0,

    // 1. experience
    ExperienceSearchInput: null,
    TotalExperienceRecord: 0,
    // CARD ONLY
    TotalCardOnlyExperienceRecord: 0,
    CardOnlyExperiences: [],
    CurrentCardOnlyExperiencesPageIndex: 0,
    CurrentCardOnlyExperiencesFilter: 'ALL',
    CurrentCardOnlyExperiencesFilterLabel: 'All',
    // CARD AND PAGES
    TotalCardAndPagesExperienceRecord: 0,
    CardAndPagesExperiences: [],
    CurrentCardAndPagesExperiencesPageIndex: 0,
    CurrentCardAndPagesExperiencesFilter: 'ALL',
    CurrentCardAndPagesExperiencesFilterLabel: 'All',

    // 2. channel
    ChannelSearchInput: null,
    TotalChannelRecord: 0,
    ExperienceChannels: [],
    ChannelTypeFilter: 'ALL',
    ChannelTypeFilterLabel: 'All channel',
    ChannelStatusFilter: 'ALL',
    ChannelStatusFilterLabel: 'All',

    // 3. stream
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
    let tmpCardOnlyExperiences = Object.assign([], updated.CardOnlyExperiences);
    let tmpCardAndPagesExperiences = Object.assign([], updated.CardAndPagesExperiences);
    let tmpExperienceChannels = Object.assign([], updated.ExperienceChannels);
    let tmpStreamActiveChannels = Object.assign([], updated.StreamActiveChannels);
    let tmpCurrentStreamChannel = Object.assign({}, updated.CurrentStreamChannel);
    let tmpLiveExperienceStreams = Object.assign([], updated.LiveExperienceStreams);
    let tmpPendingExperiences = Object.assign([], updated.PendingExperiences);

    let tmpFilterLabel;
    let tmpExperience;
    let tmpPage;
    let tmpSection;

    let tmpExperienceChannel;
    let tmpExperienceStream;

    switch (type) {

        case DASHBOARD_NAVI__SUCCEEDED:
            updated.NaviIndex = payload.index;
            return updated;

        case HTML_FETCH__SUCCEEDED:
            if (payload.experienceType == 'CARD_ONLY') {
                tmpExperience = find_experience_obj_by_guid(updated.CardOnlyExperiences, payload.experienceGUID);
                tmpPage = find_page_obj_by_guid(tmpExperience.experience.ExperiencePages, payload.pageGUID);
                tmpSection = find_section_obj_by_guid(tmpPage.page.Sections, payload.sectionGUID);
                tmpPage.page.Sections[tmpSection.index].HtmlContent = payload.html;
                tmpCardOnlyExperiences[tmpExperience.index] = tmpExperience.experience;
                updated.CardOnlyExperiences = tmpCardOnlyExperiences;
            } else if (payload.experienceType == 'CARD_AND_PAGES') {
                tmpExperience = find_experience_obj_by_guid(updated.CardAndPagesExperiences, payload.experienceGUID);
                tmpPage = find_page_obj_by_guid(tmpExperience.experience.ExperiencePages, payload.pageGUID);
                tmpSection = find_section_obj_by_guid(tmpPage.page.Sections, payload.sectionGUID);
                tmpPage.page.Sections[tmpSection.index].HtmlContent = payload.html;
                tmpCardAndPagesExperiences[tmpExperience.index] = tmpExperience.experience;
                updated.CardAndPagesExperiences = tmpCardAndPagesExperiences;
            }
            return updated;

        case CHANNEL_UPDATE_SEARCH__SUCCEEDED:
            updated.ChannelSearchInput = payload.val;
            updated.TotalChannelRecord = payload.totalRecord;
            updated.ExperienceChannels = payload.expereienceChannels;
            return updated;

        case CHANNEL_UPDATE_FILTER__SUCCEEDED:
            if (payload.filterType == 'CHANNEL_TYPE') {
                if (payload.filter == 'ALL') {
                    tmpFilterLabel = 'All channel';
                } else if (payload.filter == 'PUBLIC') {
                    tmpFilterLabel = 'Public channel';
                } else if (payload.filter == 'INVITATION') {
                    tmpFilterLabel = 'Password channel';
                }
                updated.ChannelTypeFilter = payload.filter;
                updated.ChannelTypeFilterLabel = tmpFilterLabel;
            } else if (payload.filterType == 'CHANNEL_STATUS') {
                if (payload.filter == 'ALL') {
                    tmpFilterLabel = 'All';
                } else if (payload.filter == 'LIVE') {
                    tmpFilterLabel = 'Live';
                } else if (payload.filter == 'DRAFT') {
                    tmpFilterLabel = 'Draft';
                }
                updated.ChannelStatusFilter = payload.filter;
                updated.ChannelStatusFilterLabel = tmpFilterLabel;
            }
            updated.TotalChannelRecord = payload.totalRecord;
            updated.ExperienceChannels = payload.expereienceChannels;
            return updated;

        case CHANNEL_CLEAR_FILTER__SUCCEEDED:
            updated.TotalChannelRecord = payload.totalRecord;
            updated.ExperienceChannels = payload.expereienceChannels;
            updated.ChannelSearchInput = '';
            updated.ChannelTypeFilter = 'ALL';
            updated.ChannelTypeFilterLabel = 'ALL channel';
            updated.ChannelStatusFilter = 'ALL';
            updated.ChannelStatusFilterLabel = 'All';
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

        case EXPERIENCE_UPDATE_SEARCH__SUCCEEDED:
            updated.ExperienceSearchInput = payload.val;
            // card only
            updated.CurrentCardOnlyExperiencesPageIndex = 0;
            updated.CardOnlyExperiences = payload.cardOnlyExperiences;
            updated.TotalCardOnlyExperienceRecord = payload.cardOnlyTotal;
            // card and pages
            updated.CurrentCardAndPagesExperiencesPageIndex = 0;
            updated.CardAndPagesExperiences = payload.cardAndPgesExperiences;
            updated.TotalCardAndPagesExperienceRecord = payload.cardAndPgesTotal;
            // total
            updated.TotalExperienceRecord = updated.TotalCardOnlyExperienceRecord + updated.TotalCardAndPagesExperienceRecord;
            return updated;

        case EXPERIENCE_UPDATE_FILTER__SUCCEEDED:
            if (payload.experienceType == 'CARD_ONLY') {
                if (payload.option == 'ALL') {
                    tmpFilterLabel = 'All';
                } else if (payload.option == 'LIVE') {
                    tmpFilterLabel = 'Live';
                } else if (payload.option == 'DRAFT') {
                    tmpFilterLabel = 'Draft';
                }
                updated.TotalCardOnlyExperienceRecord = payload.totalRecord;
                updated.CardOnlyExperiences = payload.experiences;
                updated.CurrentCardOnlyExperiencesPageIndex = 0;
                updated.CurrentCardOnlyExperiencesFilter = payload.option;
                updated.CurrentCardOnlyExperiencesFilterLabel = tmpFilterLabel;
            } else if (payload.experienceType == 'CARD_AND_PAGES') {
                if (payload.option == 'ALL') {
                    tmpFilterLabel = 'All';
                } else if (payload.option == 'LIVE') {
                    tmpFilterLabel = 'Live';
                } else if (payload.option == 'DRAFT') {
                    tmpFilterLabel = 'Draft';
                }
                updated.TotalCardAndPagesExperienceRecord = payload.totalRecord;
                updated.CardAndPagesExperiences = payload.experiences;
                updated.CurrentCardAndPagesExperiencesPageIndex = 0;
                updated.CurrentCardAndPagesExperiencesFilter = payload.option;
                updated.CurrentCardAndPagesExperiencesFilterLabel = tmpFilterLabel;
            }
            // total
            updated.TotalExperienceRecord = updated.TotalCardOnlyExperienceRecord + updated.TotalCardAndPagesExperienceRecord;
            return updated;

        case EXPERIENCE_CLEAR_FILTER__SUCCEEDED:
            updated.ExperienceSearchInput = '';
            // card only
            updated.CurrentCardOnlyExperiencesPageIndex = 0;
            updated.CurrentCardOnlyExperiencesFilter = 'ALL';
            updated.CurrentCardOnlyExperiencesFilterLabel = 'All';
            updated.CardOnlyExperiences = payload.cardOnlyExperiences;
            updated.TotalCardOnlyExperienceRecord = payload.cardOnlyTotal;
            // card and pages
            updated.CurrentCardAndPagesExperiencesPageIndex = 0;
            updated.CurrentCardAndPagesExperiencesFilter = 'ALL';
            updated.CurrentCardAndPagesExperiencesFilterLabel = 'All';
            updated.CardAndPagesExperiences = payload.cardAndPgesExperiences;
            updated.TotalCardAndPagesExperienceRecord = payload.cardAndPgesTotal;
            // total
            updated.TotalExperienceRecord = updated.TotalCardOnlyExperienceRecord + updated.TotalCardAndPagesExperienceRecord;
            return updated;

        case EXPERIENCE_FETCH__SUCCEEDED:
            if (payload.experienceType == 'CARD_ONLY') {
                updated.TotalCardOnlyExperienceRecord = payload.totalRecord;
                updated.CardOnlyExperiences = payload.experiences;
            } else if (payload.experienceType == 'CARD_AND_PAGES') {
                updated.TotalCardAndPagesExperienceRecord = payload.totalRecord;
                updated.CardAndPagesExperiences = payload.experiences;
            }
            updated.TotalExperienceRecord = updated.TotalCardOnlyExperienceRecord + updated.TotalCardAndPagesExperienceRecord;
            return updated;

        case EXPERIENCE_FETCH_MORE__SUCCEEDED:
            if (payload.experienceType == 'CARD_ONLY') {
                updated.TotalCardOnlyExperienceRecord = payload.totalRecord;
                tmpCardOnlyExperiences = [...tmpCardOnlyExperiences, ...payload.experiences];
                updated.CardOnlyExperiences = tmpCardOnlyExperiences;
                updated.CurrentCardOnlyExperiencesPageIndex = updated.CurrentCardOnlyExperiencesPageIndex + 1;
            } else if (payload.experienceType == 'CARD_AND_PAGES') {
                updated.TotalCardAndPagesExperienceRecord = payload.totalRecord;
                tmpCardAndPagesExperiences = [...tmpCardAndPagesExperiences, ...payload.experiences];
                updated.CardAndPagesExperiences = tmpCardAndPagesExperiences;
                updated.CurrentCardAndPagesExperiencesPageIndex = updated.CurrentCardAndPagesExperiencesPageIndex + 1;
            }
            return updated;

        case EXPERIENCE_DELETE__SUCCEEDED:
            if (payload.experienceType == 'CARD_ONLY') {
                tmpExperience = find_experience_obj_by_guid(updated.CardOnlyExperiences, payload.experienceGUID);
                tmpCardOnlyExperiences.splice(tmpExperience.index, 1);
                updated.CardOnlyExperiences = tmpCardOnlyExperiences;
                updated.TotalCardOnlyExperienceRecord = updated.TotalCardOnlyExperienceRecord - 1;
                updated.TotalExperienceRecord = updated.TotalExperienceRecord - 1;
            } else if (payload.experienceType == 'CARD_AND_PAGES') {
                tmpExperience = find_experience_obj_by_guid(updated.CardAndPagesExperiences, payload.experienceGUID);
                tmpCardAndPagesExperiences.splice(tmpExperience.index, 1);
                updated.CardAndPagesExperiences = tmpCardAndPagesExperiences;
                updated.TotalCardAndPagesExperienceRecord = updated.TotalCardAndPagesExperienceRecord - 1;
                updated.TotalExperienceRecord = updated.TotalExperienceRecord - 1;
            }
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
            // 1. update channel
            tmpExperienceChannel = find_experience_channel_obj_by_guid(tmpStreamActiveChannels, tmpCurrentStreamChannel.ExperienceChannelGUID);
            tmpCurrentStreamChannel.ExperienceStreams.push(payload.experienceStream);
            tmpStreamActiveChannels[tmpExperienceChannel.index] = Object.assign({}, tmpCurrentStreamChannel);
            // 2. update live streamed experience
            tmpLiveExperienceStreams.push(payload.experienceStream);
            // 3. update pending experience
            tmpExperience = find_experience_obj_by_guid(tmpPendingExperiences, payload.experience.ExperienceGUID);
            tmpPendingExperiences.splice(tmpExperience.index, 1);

            updated.StreamActiveChannels = tmpStreamActiveChannels;
            updated.LiveExperienceStreams = tmpLiveExperienceStreams;
            updated.PendingExperiences = tmpPendingExperiences;
            return updated;

        case STREAM_REMOVE__SUCCEEDED:
            // 1. update channel
            tmpExperienceChannel = find_experience_channel_obj_by_guid(tmpStreamActiveChannels, tmpCurrentStreamChannel.ExperienceChannelGUID);
            tmpExperienceStream = find_experience_stream_obj_by_guid(tmpCurrentStreamChannel.ExperienceStreams, payload.experienceStreamGUID);
            tmpCurrentStreamChannel.ExperienceStreams.splice(tmpExperienceStream.index, 1);
            tmpStreamActiveChannels[tmpExperienceChannel.index] = Object.assign({}, tmpCurrentStreamChannel);
            // 2. update live streamed experience
            tmpExperienceStream = find_experience_stream_obj_by_guid(tmpLiveExperienceStreams, payload.experienceStreamGUID);
            tmpLiveExperienceStreams.splice(tmpExperienceStream.index, 1);
            // 3. update pennding experience
            tmpPendingExperiences.push(payload.experience);

            updated.StreamActiveChannels = tmpStreamActiveChannels;
            updated.LiveExperienceStreams = tmpLiveExperienceStreams;
            updated.PendingExperiences = tmpPendingExperiences;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
