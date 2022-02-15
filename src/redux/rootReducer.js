import { combineReducers } from "redux";
import { detailsReducer } from "./details/detailsReducer";
import { preferencesReducer } from "./preferences/preferencesReducer";
import { regionsReducer } from "./regions/regionsReducer";
import { taxesReducer } from "./taxes/taxesReducer";

const rootReducer = combineReducers({
    details: detailsReducer,
    regions: regionsReducer,
    taxes: taxesReducer,
    preferences: preferencesReducer,
});
export default rootReducer;