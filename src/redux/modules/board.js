import { firestore } from "../../firebase";

// Actions
const LOAD = "board/LOAD";
const CREATE = "board/CREATE";
const UPDATE = "board/UPDATE";
const DELETE = "board/DELETE";

const initialState = {
  board: [
    {
      author: "글쓴이",
      title: "글제목",
      content: "글내용",
      time: 1626358691434,
    },
  ],
};

// Action Creators
export function loadBoard(board) {
  return { type: LOAD, board };
}

export function createMemo(memo) {
  return { type: CREATE, memo };
}

export function updateMemo(memo, idx) {
  return { type: UPDATE, memo };
}

export function deleteMemo(idx) {
  return { type: DELETE, idx };
}

const board_db = firestore.collection("board");
const board_db_sort = firestore.collection("board").orderBy("time", "desc");

// 파이어베이스랑 통신하는 부분
export const loadBoardFB = () => {
  return function (dispatch) {
    board_db_sort.get().then((docs) => {
      let board_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          board_data = [...board_data, { id: doc.id, ...doc.data() }];
        }
      });

      // 이제 액션 생성 함수한테 우리가 가져온 데이터를 넘겨줘요! 그러면 끝!
      dispatch(loadBoard(board_data));
    });
  };
};

export const createMemoFB = (board) => {
  return function (dispatch) {
    // 생성할 데이터를 미리 만들게요!
    let newBoard;

    // add()에 데이터를 넘겨줍시다!
    board_db
      .add(board)
      .then((docRef) => {
        // id를 추가한다!
        newBoard = { ...board, id: docRef.id };
        console.log(newBoard);

        // 성공했을 때는? 액션 디스패치!
        dispatch(createMemo(newBoard));
      })
      .catch((err) => {
        // 여긴 에러가 났을 때 들어오는 구간입니다!
        console.log(err);
        window.alert("오류가 발생했습니다. 다시 시도해주세요.");
      });
  };
};

// 파이어베이스랑 통신하는 부분
export const updateMemoFB = (memo, idx) => {
  return function (dispatch, getState) {
    const _board_data = getState().board.board[idx];
    let board_data = memo;

    if (!_board_data.id) {
      return;
    }

    console.log(_board_data);

    board_db
      .doc(_board_data.id)
      .update(board_data)
      .then((res) => {
        dispatch(updateMemo(memo, idx));
      })
      .catch((err) => {
        console.log("err");
      });
  };
};

export const deleteMemoFB = (idx) => {
  return function (dispatch, getState) {
    const _board_data = getState().board.board[idx];
    if (!_board_data.id) {
      return;
    }
    board_db
      .doc(_board_data.id)
      .delete()
      .then((res) => {
        dispatch(deleteMemo(idx));
      })
      .catch((err) => {
        console.log("삭제시 오류가 발생하였습니다");
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      if (action.board.length > 0) {
        return { board: action.board };
      }
      return state;

    case CREATE:
      const newBoard = [...state.board, action.memo];
      return { board: newBoard };

    default:
      return state;
  }
}
