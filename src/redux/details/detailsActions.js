export const modifyUserDetails = (details) => {
    return {
        type: "NEW_DETAILS_ADDED",
        pyload: details,
    };
};