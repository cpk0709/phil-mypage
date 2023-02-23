import * as ActionTypes from "./actionTypes";

const initialState = {
  list: [
    { id: 0, title: "company A" },
    { id: 1, title: "company B" },
    { id: 2, title: "company C" },
  ],
};

export const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RESUME_CREATE:
      const new_resume = [...state.list, action.resume];
      return { list: new_resume };
    default:
      return state;
  }
};
