import * as actionTypes from './game.actionTypes';

export const setUsername = (value) => {
  return {
    type: actionTypes.SET_USERNAME,
    value
  }
}

// export const LoadJokeCategories = () => {
//   return dispatch => {
//     dispatch(loading())
//     axios.get('https://api.chucknorris.io/jokes/categories')
//          .then(({data}) => dispatch(loadJokeCategoriesSuccess(data)))
//          .catch(err => dispatch(error()))
//   }
// }