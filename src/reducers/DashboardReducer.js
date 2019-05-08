import { DashboardType } from '../actions/ActionType';

const DEFAULT_STATE = {
  compainInfo: []
};

const setEmployee = (state, action) => {
  const newState = [];
  Object.assign(newState, state);
  newState.compainInfo = action.compainInfo;
  return newState;
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case DashboardType.COMPAIN_SUCCESS:
      return setEmployee(state, action);
    default:
      return state;
  }
}
