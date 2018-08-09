export const search_object_index_by_value = (arr, value) => {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        if (arr[i].Type == value) return i;
    }
    return null;
}

export const capitalize_array_object_key = (obj) => {
    for (let i = 0; i < obj.length; i++) {
        let a = obj[i];
        for (let key in a) {
            let temp;
            if (a.hasOwnProperty(key)) {
                temp = a[key];
                delete a[key];
                a[key.charAt(0).toUpperCase() + key.substring(1)] = temp;
            }
        }
        obj[i] = a;
    }
    return obj;
}

export const remove_is_deleted_item = (arr) => {
    let output = [];
    for(let i = 0; i < arr.length; i++){
        if(!arr[i].IsDeleted){
            output.push(arr[i]);
        }
    } 
    return output;
}

export const find_experience_obj_by_guid = (experiences, guid) => {
    for (let i = 0; i < experiences.length; i++) {
        let experience = experiences[i];
        if (experience.ExperienceGUID == guid) {
            return {
                index: i,
                experience,
            };
        }
    }
    return null;
}

export const find_page_obj_by_guid = (pages, guid) => {
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        if (page.PageGUID == guid) {
            return {
                index: i,
                page,
            };
        }
    }
    return null;
}

export const find_section_obj_by_guid = (sections, guid) => {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        if (section.SectionGUID == guid) {
            return {
                index: i,
                section,
            };
        }
    }
    return null;
}

export const find_experience_channel_obj_by_guid = (experienceChannels, guid) => {
    for (let i = 0; i < experienceChannels.length; i++) {
        let experienceChannel = experienceChannels[i];
        if (experienceChannel.ExperienceChannelGUID == guid) {
            return {
                index: i,
                experienceChannel,
            };
        }
    }
    return null;
}

export const find_experience_stream_obj_by_guid = (experienceStreams, guid) => {
    for (let i = 0; i < experienceStreams.length; i++) {
        let experienceStream = experienceStreams[i];
        if (experienceStream.ExperienceStreamGUID == guid) {
            return {
                index: i,
                experienceStream,
            };
        }
    }
    return null;
}