import request from 'superagent'

export const FETCH_PEOPLE = 'FETCH_PEOPLE'
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS'
export const FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR'

export function fetchPeople () {
  return dispatch => {
    dispatch({ type: FETCH_PEOPLE })
    return request
      .get('https://randomuser.me/api/?results=20')
      .then(response => dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: response.body.results }))
      .catch(error => dispatch({ type: FETCH_PEOPLE_ERROR, payload: error.body }))
  }
}
