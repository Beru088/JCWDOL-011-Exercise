import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../features/user/userSlice"

export default function Navbar() {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.user.userList)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="flex-row p-4">
      <h1 className="text-center text-4xl font-bold border-b-black">
        Exercise-11
      </h1>
      <div className="flex my-4 justify-center text-xl font-medium divide-x-2 divide-black">
        <a href="/register" className="px-2 text-blue-300 underline">
          Register
        </a>
        <a href="/users" className="flex px-2 text-blue-300 underline">
          Users{" "}
          <p className="font-bold text-black none ml-2">
            {userList?.length || 0}
          </p>
        </a>
        <a href="/tweets" className="px-2 text-blue-300 underline">
          Tweet
        </a>
      </div>
    </div>
  )
}
