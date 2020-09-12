const initialState = {
  elements: [
    [
      ["React is mainly used for building"],
      [" Database", "Connectivity", " User interface", "Design Platform"],
      ["Us er interface"],
    ],
    [
      ["React is mainly used for building"],
      [" Database", "Connectivity", " User interface", "Design Platform"],
      ["User interface"],
    ],
  ],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
