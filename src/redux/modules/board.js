// Actions
const LOAD = "board/LOAD";
const CREATE = "board/CREATE";

const initialState = {
  board: [
    {
      author: "글쓴이입니다",
      title: "글제목입니다",
      content: "글내용입니다",
    },
    {
      author: "글쓴이입니다2",
      title: "글제목입니다2",
      content: "글내용입니다2",
    },
  ],
};

// Action Creators
export function loadBoard() {
  return { type: LOAD };
}

export function createMemo(memo) {
  return { type: CREATE, memo };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return state;

    case CREATE:
      const newBoard = [...state.board, action.memo];
      return { board: newBoard };

    default:
      return state;
  }
}
