import { SHOW_MOVIES, SHOW_SCHEDULE } from "./constants";

export const showMovies = (payload) => ({type: SHOW_MOVIES, payload});
export const showSchedule = (payload) => ({type: SHOW_SCHEDULE, payload});