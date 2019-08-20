import forEach from 'lodash/forEach';

const paramsSeperator = (search) => {
    if (search.includes("?")) {
        const paramsMap = {};
        search = search.replace('?', '');
        const params = search.split('&');
        forEach(params, param => {
            const values = param.split("=");
            if (values.length != 2) {
                return null;
            }
            paramsMap[values[0]] = values[1];
        });
        return paramsMap;
    } else {
        return null;
    }
};

export {
    paramsSeperator
};
