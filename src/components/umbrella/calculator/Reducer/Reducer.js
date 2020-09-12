const initialState = {
  history: "",
  result: "",
  typingLine: "0",
  buttons: {
    ac: "AC",
    del: "del",
    [`%`]: "%",
    [`/`]: "/",
    [`x`]: "x",
    [`+`]: "+",
    [`-`]: "-",
    [`=`]: "=",
    [`.`]: ".",
    [`0`]: 0,
    [`1`]: 1,
    [`2`]: 2,
    [`3`]: 3,
    [`4`]: 4,
    [`5`]: 5,
    [`6`]: 6,
    [`7`]: 7,
    [`8`]: 8,
    [`9`]: 9,
  },
  counterResult: true,
  dotCounter: true,
};

const operatorsFunction = (initState, localState) => {
  switch (localState.history.substr(-1)) {
    case "/":
      localState.result = +initState.result / +initState.typingLine;
      break;
    case "x":
      localState.result = +initState.result * +initState.typingLine;
      break;
    case "+":
      localState.result = +initState.result + +initState.typingLine;
      break;
    case "-":
      localState.result = +initState.result - +initState.typingLine;
      break;
    default:
      return console.log("error");
  }
};

const operators = (initState, localState, action_F) => {
  if (initState.typingLine !== "0" && initState.history === "") {
    localState.history += initState.typingLine + action_F.type;
    localState.result = initState.typingLine;
    localState.counterResult = false;
  } else {
    if (initState.counterResult && localState.typingLine !== "0") {
      operatorsFunction(initState, localState);

      localState.history += localState.typingLine + action_F.type;
      localState.typingLine = localState.result;
      localState.counterResult = false;
    }
  }
  let historyLastSymbol = localState.history.substr(-1);
  if (!localState.counterResult) {
    if (isNaN(+historyLastSymbol)) {
      localState.history =
        localState.history.substr(0, localState.history.length - 1) +
        action_F.type;
    } else {
      localState.history = localState.history + action_F.type;
    }
  }
};
const numbers = (initState, localState, action_F) => {
  if (initState.typingLine === "0") {
    localState.typingLine = "";
    localState.typingLine += action_F.type;
  } else {
    if (!initState.counterResult) {
      localState.typingLine = "";
      localState.typingLine += action_F.type;
    } else {
      localState.typingLine += action_F.type;
    }
  }
};
const equal = (initState, localState) => {
  localState.dotCounter = true;

  if (initState.counterResult && localState.history !== "") {
    operatorsFunction(initState, localState);

    localState.history += localState.typingLine;
    localState.typingLine = localState.result;
    localState.counterResult = false;
  }
};
const dot = (initState, localState, action_F) => {
  if (localState.dotCounter && initState.counterResult) {
    localState.typingLine += action_F.type;
    localState.dotCounter = false;
  }
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ac":
      const _ac_State = {
        history: "",
        result: "",
        typingLine: "0",
        counterResult: true,
        dotCounter: true,
      };
      return { ...state, ..._ac_State };
    case "del":
      const _del_State = {
        result: state.result,
        typingLine: state.typingLine,
        counterResult: state.counterResult,
        dotCounter: state.dotCounter,
      };
      if (_del_State.counterResult) {
        if (state.typingLine.substr(-1) === ".") {
          _del_State.dotCounter = true;
        }
        if (
          state.typingLine !== "0" &&
          state.typingLine !== state.result &&
          state.typingLine.length !== 1
        ) {
          _del_State.typingLine = state.typingLine.substr(
            0,
            state.typingLine.length - 1
          );
        } else {
          _del_State.typingLine = "0";
        }
      }

      return { ...state, ..._del_State };
    case "/":
      const _divide_State = {
        history: state.history,
        result: state.result,
        typingLine: state.typingLine,
        counterResult: state.counterResult,
      };
      operators(state, _divide_State, action);

      return { ...state, ..._divide_State };
    case "x":
      const _x_State = {
        history: state.history,
        result: state.result,
        typingLine: state.typingLine,
        counterResult: state.counterResult,
      };
      operators(state, _x_State, action);
      return { ...state, ..._x_State };
    case "+":
      const _plus_State = {
        history: state.history,
        result: state.result,
        typingLine: state.typingLine,
        counterResult: state.counterResult,
      };
      operators(state, _plus_State, action);
      return { ...state, ..._plus_State };
    case "-":
      const _minus_State = {
        history: state.history,
        result: state.result,
        typingLine: state.typingLine,
        counterResult: state.counterResult,
      };
      operators(state, _minus_State, action);
      return { ...state, ..._minus_State };

    case ".":
      const _dot_State = {
        counterResult: state.counterResult,
        dotCounter: state.dotCounter,
        typingLine: state.typingLine,
      };
      dot(state, _dot_State, action);
      return { ...state, ..._dot_State };

    case "=":
      const _equal_State = {
        history: state.history,
        result: state.result,
        typingLine: state.typingLine,
        counterResult: state.counterResult,
      };
      equal(state, _equal_State);
      return { ...state, ..._equal_State };

    case "0":
      const _0_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _0_State, action);
      return { ...state, ..._0_State };
    case "1":
      const _1_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _1_State, action);
      return { ...state, ..._1_State };
    case "2":
      const _2_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _2_State, action);
      return { ...state, ..._2_State };
    case "3":
      const _3_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _3_State, action);
      return { ...state, ..._3_State };
    case "4":
      const _4_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _4_State, action);
      return { ...state, ..._4_State };
    case "5":
      const _5_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _5_State, action);
      return { ...state, ..._5_State };
    case "6":
      const _6_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _6_State, action);
      return { ...state, ..._6_State };
    case "7":
      const _7_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _7_State, action);
      return { ...state, ..._7_State };
    case "8":
      const _8_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _8_State, action);
      return { ...state, ..._8_State };
    case "9":
      const _9_State = {
        typingLine: state.typingLine,
        counterResult: true,
        dotCounter: state.dotCounter,
      };
      numbers(state, _9_State, action);
      return { ...state, ..._9_State };

    default:
      return state;
  }
};
