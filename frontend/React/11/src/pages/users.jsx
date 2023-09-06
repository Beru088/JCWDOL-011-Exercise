import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../features/user/userSlice"

export default function Users() {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.user.userList)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="mx-auto rounded-md shadow-sm bg-slate-300 py-8 px-4 w-1/3">
      <h2 className="text-2xl text-center font-bold">Users Data</h2>
      <table className="mx-auto my-4 w-4/5">
        <thead className="border-y-2 border-slate-500">
          <tr className="bg-gray-500">
            <th>NO</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>

        <tbody className="border-y-2 border-slate-500 [&>*:nth-child(odd)]:bg-gray-200">
          {userList?.map((item, index) => (
            <tr key={index} className="text-center ">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
