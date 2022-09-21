// Invoke Users API
const getUserModule = () =>
  import(/* webpackChunkName: "usersAPI" */ '../examples/usersAPI')
const btnUsersApi = document.getElementById('btn-users-api')
btnUsersApi.addEventListener('click', () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json))
  })
})
