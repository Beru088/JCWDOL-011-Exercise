import Axios from "axios"

const fetchUsers = () => {
  return Axios.get("http://localhost:2000/users")
}

const addUser = (data) => {
  return Axios.post("http://localhost:2000/users", data)
}

export default {
  fetchUsers,
  addUser,
}
