import { configureStore } from "@reduxjs/toolkit";
/* import 해온 것은 slice.reducer이다. */
import todos from "../modules/todosSlice";

// Reducer를 stor를 통해 생성함
const store = configureStore({
    reducer: { todos },
});

// stroe를 export함
export default store;