import map from 'lodash/map';
import find from 'lodash/find';

const ALL_CATEGORIES = [
    {
        "name": "Income Tax",
        "value": "income_tax",
        "sub_categories": {
            "article": "Article",
            "news": "News",
            "notifications": "Notifications"
        }
    }, {
        "name": "Audit",
        "value": "audit",
        "sub_categories": {
            "article": "Article",
            "news": "News"
        }
    }, {
        "name": "GST",
        "value": "gst",
        "sub_categories": {
            "article": "Article",
            "news": "News"
        }
    }, {
        "name": "VAT",
        "value": "vat",
        "sub_categories": {
            "article": "Article",
            "news": "News"
        }
    }, {
        "name": "Service Tax",
        "value": "service_tax",
        "sub_categories": {
            "article": "Article",
            "news": "News"
        }
    }, {
        "name": "Corporate Law",
        "value": "corporate_law",
        "sub_categories": {
            "article": "Article",
            "news": "News"
        }
    }, {
        "name": "Accounts",
        "value": "accounts",
        "sub_categories": {
            "article": "Article",
            "news": "News"
        }
    }
];

const getSubCategories = (category) => {
    const category_details = find(ALL_CATEGORIES, cat => cat.value === category);
    if (category_details && category_details["sub_categories"]) {
        return map(Object.keys(category_details["sub_categories"]), key => ({ "value": key, "label": category_details["sub_categories"][key] }));
    }
    return [];
};

export {
    ALL_CATEGORIES,
    getSubCategories,
};
