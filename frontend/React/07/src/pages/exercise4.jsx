import { useState, useEffect } from "react"

export default function Exercise4() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })

    const dataUsers = await response.json()

    setUsers(dataUsers)
  }

  return (
    <div className="soal4">
      <h1>Fetch API from JSON Placeholder </h1>
      <table border="1" cellSpacing="0" cellPadding="10" style={{ width: 900 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td> Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
