export const CHECK_LIST = {
    user: [
        { property: 'username', reg: /^(?=.*).{2,20}$/, message: 'INVALID_USERNAME' },
        { property: 'email', reg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'INVALID_EMAIL' },
        { property: 'password', reg: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,20}$/, message: 'INVALID_PASSWORD' }
    ],
    post: [
        { property: 'content', reg: /^(?=.*).+$/m, message: 'INVALID_CONTENT' }
    ],
    comment: [
        { property: 'content', reg: /^(?=.*).+$/m, message: 'INVALID_CONTENT' }
    ]
};

export function checkProperty(data, service, strict) {
    let result = {};
    for (const item of CHECK_LIST[service]) {
        if (data[item.property] && item.reg.exec(data[item.property])) {
            result[item.property] = data[item.property];
        } else {
            if (!strict && !data[item.property]) continue;
            return { message: item.message, data: null };
        }
    }
    return { message: 'SUCCESS', data: result };
}