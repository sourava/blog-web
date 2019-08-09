import { 
    asyncActionTypeCreator, 
    asyncActionCreator,
} from 'shared/utils/reduxActionHelper';
import apiPaths from 'shared/apiPaths';

const updateUserActionType = asyncActionTypeCreator('UPDATE_USER');
const updateUserAction = asyncActionCreator(updateUserActionType);

const updateUser = (data, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.UPDATE_USER,
        headers: { 'Authorization': `Bearer ${token}` },
        method: 'patch',
        data,
    };
    return updateUserAction.action(axiosConfig, successCallback, errorCallback);
};

export {
    updateUserActionType,
    updateUser,
};
