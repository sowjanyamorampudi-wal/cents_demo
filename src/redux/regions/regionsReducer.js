const initialValues = {
    regions: [
        { region: "Berkeley", district: "Hearst avenue" },
        { region: "New york", district: "New york" },
        { region: "Berkeley", district: "Hearst avenue......." },
    ],
    isShown: true,
};
export const regionsReducer = (state = initialValues, action) => {
    switch (action.type) {
        case "REGIONS_SHOWN":
            return {
                ...state,
                isShown: action.payload,
            };

        default:
            return state;
    }
};