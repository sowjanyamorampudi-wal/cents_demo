const initialValues = {
    requireemployeecode: false,
    recordracknumber: true,
};
export const settingsReducer = (state = initialValues, action) => {
    switch (action.type) {
        case "UPDATE_TOGGLE":
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};