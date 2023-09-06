import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import DB from "../../api/fetchDB"

export const fetchUsers = createAsyncThunk(
  "users/fetchUsersStatus",
  async () => {
    const response = await DB.fetchUsers()
    return response.data
  }
)

export const addUser = createAsyncThunk("users/addUserStatus", async (data) => {
  const response = await DB.addUser(data)
  return response.data
})

const initialState = {
  userList: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.userList = action.payload
    })
    builder.addCase(addUser.fulfilled, () => {})
  },
})

export default userSlice.reducer
