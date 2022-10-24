export const CREATE_TAG = "CREATE_TAG";
export const EDIT_TAG = "EDIT_TAG";
export const DELETE_TAG = "DELETE_TAG";


export const createTag = (tag) => {
    return {
        type: CREATE_TAG,
        payload: {
            tagName: tag.name,
            tagDescription: tag.description,
            tagImage: tag.image,
        }
    }
}

export const editTag = (tag) => {
    return {
        type: EDIT_TAG,
        payload: {
            tagName: tag.name,
            tagDescription: tag.description,
            tagImage: tag.image,
        }
    }
}

export const deleteTag = (tag) => {
    return {
        type: DELETE_TAG,
        payload: {
            tagName: tag.name,
        }
    }
}