import * as ActionTypes from "./actionTypes";

export const createResume = (resume) => {
  return { type: ActionTypes.RESUME_CREATE, resume };
};
