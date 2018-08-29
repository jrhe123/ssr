export const search_object_index_by_value = (arr, value) => {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        if (arr[i].Type == value) return i;
    }
    return null;
}