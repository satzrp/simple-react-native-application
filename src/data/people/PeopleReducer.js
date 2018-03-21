import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR
} from './PeopleActions'

const initialState = {
  isLoading: false,
  people: [],
  hasError: false,
  errorMessage: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return Object.assign({}, initialState, {
        isLoading: true
      })
    case FETCH_PEOPLE_ERROR:
      return Object.assign({}, initialState, {
        isLoading: false,
        hasError: true,
        errorMessage: 'Error in fetching people data from server'
      })
    case FETCH_PEOPLE_SUCCESS:
      return Object.assign({}, initialState, {
        isLoading: false,
        people: action.payload
      })
    default:
      return state
  }
}
