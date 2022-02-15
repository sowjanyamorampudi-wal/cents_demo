import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
const Store = createStore(rootReducer);

export default Store;