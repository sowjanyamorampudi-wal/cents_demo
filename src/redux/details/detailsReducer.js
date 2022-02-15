const details = {
    name: "sowjanya",
    company: "westagile labs hyderabad",
    address: "purva..",
    city: "Hyderabad",
    state: "Telangana",
    zip: "9421",
    phone: "9989786543",
    email: "sowjanya@westagilelabs.com",
};

export const detailsReducer = (state = details, action) => {
    switch (action.type) {
        case "NEW_DETAILS_ADDED":
            return {
                ...state,
                ...action.paload,
            };
        default:
            return state;
    }
};