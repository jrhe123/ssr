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