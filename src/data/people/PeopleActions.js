import request from 'superagent'

export const FETCH_PEOPLE = 'FETCH_PEOPLE'
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS'
export const FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR'

export function fetchPeople () {
  return dispatch => {
    dispatch({ type: FETCH_PEOPLE })
    return request
      .get('https://randomuser.me/api/?results=10&inc=name,email,picture')
      .then(response =>
        dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: response.body })
      )
      .catch(error =>
        dispatch({ type: FETCH_PEOPLE_ERROR, payload: error.body })
      )
  }
}
