import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// Action Value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    }
}

// Initial State
const initialState = {
    todos: [
        { id: uuidv4(), title: "운동하기", content: "운동해서 체력 기르자", isDone: false },
        { id: uuidv4(), title: "코딩 공부하기", content: "성실하게! 열심히!", isDone: true },
    ]
}

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, action.payload],
        }
    default:
      return state;
  }
};

// export default reducer
export default todos;