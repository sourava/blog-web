import { asyncActionTypeCreator, asyncActionCreator } from 'shared/utils/reduxActionHelper';
import apiPaths from 'shared/apiPaths';

const getAuthorActionType = asyncActionTypeCreator('GET_AUTHOR');
const getAuthorAction = asyncActionCreator(getAuthorActionType);

const getAuthor = (id, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.GET_AUTHOR(id),
        method: 'get'
    };

    return getAuthorAction.action(axiosConfig, successCallback, errorCallback);
};


export {
    getAuthorActionType,
    getAuthor,
};
