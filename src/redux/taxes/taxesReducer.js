const initialValues = {
    taxes: [
        { name: "abb", rate: "2", agency: "abb" },
        { name: "abbb", rate: "12.7", agency: "abbb" },
        { name: "Arizona", rate: "2.45", agency: "Arizona Tax Agency" },
        { name: "berkeley", rate: "0", agency: "agens" },
    ],
    isShown: true,
};
export const taxesReducer = (state = initialValues, action) => {
    switch (action.type) {
        case "TAXES_SHOWN":
            return {
                ...state,
                isShown: action.payload,
            };

        default:
            return state;
    }
};