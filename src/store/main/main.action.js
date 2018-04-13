export const loadList = () => {
  console.log('xaxaaxa');
  return dispatch => {
    dispatch(listPosition())
  }
}

const listPosition = () => ({
  type: 'LIST_POSITION'
})
