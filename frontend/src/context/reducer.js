export const types = {
  LIST_INCIDENTS: 'LIST_INCIDENTS',
  ADD_INCIDENT: 'ADD_INCIDENT',
  DELETE_INCIDENT: 'DELETE_INCIDENT',
  SET_ERRORS: 'SET_ERRORS',
  IS_LOADING: 'IS_LOADING',
  CLEAN_STATE: 'CLEAN_STATE'
};

export const initialState = {
  incidents: [],
  loading: false,
  errors: []
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case types.LIST_INCIDENTS:
      return {
        ...state,
        incidents: action.incidents,
        loading: false,
        errors: []
      }
    case types.DELETE_INCIDENT:
      return {
        ...state,
        incidents: state.incidents.filter(incident => incident.id !== action.id),
        loading: false,
        errors: []
      }
    case types.ADD_INCIDENT:
      return {
        ...state,
        incidents: state.incidents.concat(action.incident),
        loading: false,
        errors: []
      }
    case types.SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
        loading: false
      }
    case types.IS_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.CLEAN_STATE:
      return {
        ...state,
        loading: false,
        incidents: [],
        errors: []
      }
    default:
      return state
  }
};