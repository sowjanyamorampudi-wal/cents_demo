const initialValues = {
    section1: ["Wash Temperature", "cold", "warm", "hot"],
    section2: ["Bleach for whites", "yes", "no"],
    isShown: true,
};
export const preferencesReducer = (state = initialValues, action) => {
    switch (action.type) {
        case "PREFERENCES_SHOWN":
            return {
                ...state,
                isShown: action.payload,
            };

        default:
            return state;
    }
};