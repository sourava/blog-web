import { 
    asyncActionTypeCreator, 
    asyncActionCreator,
} from 'shared/utils/reduxActionHelper';
import apiPaths from 'shared/apiPaths';

const logOutActionType = "LOG_OUT";
const logOutAction = () => ({
    type: logOutActionType
});

const customLoginActionType = asyncActionTypeCreator('CUSTOM_LOGIN');
const customLoginAction = asyncActionCreator(customLoginActionType);

const customLogin = (data, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.LOGIN,
        method: 'post',
        data,
    };
    return customLoginAction.action(axiosConfig, successCallback, errorCallback);
};

const facebookLoginActionType = asyncActionTypeCreator('FACEBOOK_LOGIN');
const facebookLoginAction = asyncActionCreator(facebookLoginActionType);

const facebookLogin = (data, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.FACEBOOK_LOGIN,
        method: 'post',
        data,
    };
    return facebookLoginAction.action(axiosConfig, successCallback, errorCallback);
};

const googleLoginActionType = asyncActionTypeCreator('GOOGLE_LOGIN');
const googleLoginAction = asyncActionCreator(googleLoginActionType);

const googleLogin = (data, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.GOOGLE_LOGIN,
        method: 'post',
        data,
    };
    return googleLoginAction.action(axiosConfig, successCallback, errorCallback);
};

const customSignUpActionType = asyncActionTypeCreator('CUSTOM_SIGNUP');
const customSignUpAction = asyncActionCreator(customSignUpActionType);

const customSignUp = (data, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.SIGNUP,
        method: 'post',
        data,
    };
    return customSignUpAction.action(axiosConfig, successCallback, errorCallback);
};

const facebookSignUpActionType = asyncActionTypeCreator('FACEBOOK_SIGNUP');
const facebookSignUpAction = asyncActionCreator(facebookSignUpActionType);

const facebookSignUp = (data, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.FACEBOOK_SIGNUP,
        method: 'post',
        data,
    };
    return facebookSignUpAction.action(axiosConfig, successCallback, errorCallback);
};

const googleSignUpActionType = asyncActionTypeCreator('GOOGLE_SIGNUP');
const googleSignUpAction = asyncActionCreator(googleSignUpActionType);

const googleSignUp = (data, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.GOOGLE_SIGNUP,
        method: 'post',
        data,
    };
    return googleSignUpAction.action(axiosConfig, successCallback, errorCallback);
};

export {
    logOutActionType,
    logOutAction,

    facebookLoginActionType,
    facebookLogin,
    googleLoginActionType,
    googleLogin,
    customLoginActionType,
    customLogin,

    customSignUpActionType,
    customSignUp,
    facebookSignUpActionType,
    facebookSignUp,
    googleSignUpActionType,
    googleSignUp
};
