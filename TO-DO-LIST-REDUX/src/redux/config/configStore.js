import { createStore, combineReducers } from "redux";
import todos from "../modules/todos";

// Reducer 생성
const rootReducer = combineReducers({
    todos,
});

// Reducer를 stor를 통해 생성함
const store = createStore(rootReducer);

// stroe를 export함
export default store;