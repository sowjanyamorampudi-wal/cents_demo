export const showSettings = (key, val) => {
    return {
        type: "UPDATE_TOGGLE",
        payload: {
            [key]: val },
    };
};