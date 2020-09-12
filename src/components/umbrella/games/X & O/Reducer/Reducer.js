const initialState = {
  xIsNext: true,
  noWinner: false,
  winnerText: "",
  toggle: true,
  xScore: 0,
  oScore: 0,
  box_0: "",
  box_1: "",
  box_2: "",
  box_3: "",
  box_4: "",
  box_5: "",
  box_6: "",
  box_7: "",
  box_8: "",
};

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "oIsNext":
      return { ...state, xIsNext: false, [action.id]: "x" };
    case "xIsNext":
      return { ...state, xIsNext: true, [action.id]: "o" };
    case "closeApp":
      return { ...state, ...initialState };

    case "gameResult":
      const localState_gameResult = {
        toggle: state.toggle,
        winnerText: state.winnerText,
        noWinner: state.noWinner,
        oScore: state.oScore,
        xScore: state.xScore,
      };

      if (state.toggle) {
        if (
          (state.box_0 === state.box_1 &&
            state.box_0 === state.box_2 &&
            state.box_0 !== "") ||
          (state.box_0 === state.box_3 &&
            state.box_0 === state.box_6 &&
            state.box_0 !== "") ||
          (state.box_0 === state.box_4 &&
            state.box_0 === state.box_8 &&
            state.box_0 !== "") ||
          (state.box_2 === state.box_4 &&
            state.box_2 === state.box_6 &&
            state.box_2 !== "") ||
          (state.box_2 === state.box_5 &&
            state.box_2 === state.box_8 &&
            state.box_2 !== "") ||
          (state.box_3 === state.box_4 &&
            state.box_3 === state.box_5 &&
            state.box_3 !== "") ||
          (state.box_6 === state.box_7 &&
            state.box_6 === state.box_8 &&
            state.box_6 !== "") ||
          (state.box_1 === state.box_4 &&
            state.box_1 === state.box_7 &&
            state.box_1 !== "")
        ) {
          localState_gameResult.toggle = false;
          localState_gameResult.winnerText = "Winner";

          if (state.xIsNext) {
            localState_gameResult.oScore = state.oScore + 1;
          } else {
            localState_gameResult.xScore = state.xScore + 1;
          }

          return { ...state, ...localState_gameResult };
        } else if (
          state.box_0 &&
          state.box_1 &&
          state.box_2 &&
          state.box_3 &&
          state.box_4 &&
          state.box_5 &&
          state.box_6 &&
          state.box_7 &&
          state.box_8
        ) {
          localState_gameResult.toggle = false;
          localState_gameResult.noWinner = true;
          localState_gameResult.winnerText = "No Winner";

          return { ...state, ...localState_gameResult };
        }
      }
      return state;
    case "startNewGame":
      const localState_startNewGame = {
        ...initialState,
        oScore: state.oScore,
        xScore: state.xScore,
      };

      return { ...state, ...localState_startNewGame };

    default:
      return state;
  }
};
