import { asyncActionTypeCreator, asyncActionCreator } from 'shared/utils/reduxActionHelper';
import apiPaths from 'shared/apiPaths';


const getCategoriesActionType = asyncActionTypeCreator('GET_CATEGORIES');
const getCategoriesAction = asyncActionCreator(getCategoriesActionType);

const getCategories = (successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.CATEGORIES,
        method: 'get'
    };

    return getCategoriesAction.action(axiosConfig, successCallback, errorCallback);
};


export {
    getCategoriesActionType,
    getCategories,
};
