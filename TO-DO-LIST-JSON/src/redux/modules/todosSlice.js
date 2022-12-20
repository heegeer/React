import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
    todos: [],
    isLoading: false,
    error: null,
};

// Thunk 함수
export const __getTodos = createAsyncThunk(
    // 첫 번째 인자: action value
    "todos/getTodos",
    // 두 번째 인자: 콜백함수
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get("http://localhost:3001/todos");
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const __postTodos = createAsyncThunk(
    "todos/postTodos",
    async (payload, thunkAPI) => {
        try {
            // payload는 Form.jsx에서 [추가하기] 버튼 클릭했을 때 
            // __postTodos의 인자에 담아 보낸 것-새로 작성한 Todo 객체
            await axios.post("http://localhost:3001/todos", payload)
            return thunkAPI.fulfillWithValue(payload);
            // return console.log("성공")
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);



export const todosSlice = createSlice({
    name: "todos",
    initialState, 
    reducers: {},
    extraReducers: {
        [__getTodos.pending]: (state) => {
            // 네트워크 요청이 시작되면 로딩상태를 true로 변경한다.
            state.isLoading = true;
        },
        // Promise가 fullfilled일 때 dispatch함
        [__getTodos.fulfilled]: (state, action) => {
            // 네트워크 요청이 끝났으니, false로 변경한다.
            state.isLoading = false;
            // Store에 있는 todos에 서버에서 가져온 todos를 넣는다.
            state.todos = action.payload;
        },
        [__getTodos.rejected]: (state, action) => {
            // 에러가 발생했지만 네트워크 요청이 끝났으니 false로 변경한다.
            state.isLoading = false;
            // catch 된 error 객체를 state.error에 넣는다.
            state.error = action.payload
        },

        [__postTodos.pending]: (state) => {
            state.isLoading = true;
        },
        [__postTodos.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.todos = [...state.todos, action.payload]
        },
        [__postTodos.rejected]: (state, action) => {
            state.isLoading = false;
            state.action = action.payload;
        }
    },
})

// export const {} = todosSlice.actions;
export default todosSlice.reducer;



// Reducer
// const todos = (state = initialState, action) => {
//   // console.log("action.payload:", action.payload)

//   switch (action.type) {
//     // 추가하기
//     case ADD_TODO:
//         return (
//             [...state, action.payload]
//         )
//     // 삭제하기
//     case DELETE_TODO:
//         return (
//             state.filter((list) => (list.id !== action.payload))
//         )
//     // 완료 혹은 취소하기
//     case CHANGE_DONE_TODO:
//         let copy = [...state];
//         return (
//             copy.map((list) => list.id === action.payload ? {...list, isDone: !list.isDone} : list)
//         )
//     // 작성한 투두리스트 수정하기
//     case EDIT_TODO:
//         let copy2 = [...state];
//         return (
//             copy2.map((list) => list.id === action.payload.id ? action.payload : list)
//         )
//     default:
//       return state;
//   }
// };