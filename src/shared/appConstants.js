import forEach from 'lodash/forEach';

const CATEGORIES = {
    income_tax: "INCOME TAX",
    audit: "AUDIT",
    gst: "GST",
    vat: "VAR",
    service_tax: "SERVICE TAX",
    corporate_law: "CORPORATE LAW",
    accounts: "ACCOUNTS",
};

const SUB_CATEGORIES = {
    article: "Article",
    news: "News",
    notifications: "Notifications"
};

const getSubCategories = () => {
    const subCategories = [];
    forEach(SUB_CATEGORIES, (value, key) => {
        subCategories.push({ "value": key, "label": value });
    });
    return subCategories;
};

export {
    CATEGORIES,
    SUB_CATEGORIES,
    getSubCategories,
};
