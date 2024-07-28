import axios from "axios";


export const registering = async (userData,thunkAPI) => {
  try {
    const res = await axios.post("/users/signup", { userData });
    return res.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors)
  }
};
