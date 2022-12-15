import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO"
const CHANGE_DONE_TODO = "CHANGE_DONE_TODO"
const EDIT_TODO = "EDIT_TODO"

// Action Creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
}

export const changeDone = (payload) => {
    return {
        type: CHANGE_DONE_TODO,
        payload
    }
}

export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}

// Initial State
const initialState = [
        { id: uuidv4(), title: "리액트 정복", content: "리액트랑 친해지기", isDone: false },
        { id: uuidv4(), title: "코딩 공부하기", content: "성실하게! 열심히!", isDone: true },
    ]

// Reducer
const todos = (state = initialState, action) => {
  // console.log("action.payload:", action.payload)

  switch (action.type) {
    // 추가하기
    case ADD_TODO:
        return (
            [...state, action.payload]
        )
    // 삭제하기
    case DELETE_TODO:
        return (
            state.filter((list) => (list.id !== action.payload))
        )
    // 완료 혹은 취소하기
    case CHANGE_DONE_TODO:
        let copy = [...state];
        return (
            copy.map((list) => list.id === action.payload ? {...list, isDone: !list.isDone} : list)
        )
    // 작성한 투두리스트 수정하기
    case EDIT_TODO:
        let copy2 = [...state];
        return (
            copy2.map((list) => list.id === action.payload.id ? action.payload : list)
        )
    default:
      return state;
  }
};

// export default reducer
export default todos;