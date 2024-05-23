import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:8080/api.myservice.com/v1/register', userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      if (error.response.data.message.includes('Username')) {
        return rejectWithValue({ message: 'Username already exists', httpStatus: 'CONFLICT' });
      } else if (error.response.data.message.includes('Email')) {
        return rejectWithValue({ message: 'Email already exists', httpStatus: 'CONFLICT' });
      }
    }
    return rejectWithValue({ message: error.message });
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:8080/api.myservice.com/v1/auth/sign-in', userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return rejectWithValue({ message: 'Invalid username or password', httpStatus: 'UNAUTHORIZED' });
    }
    return rejectWithValue({ message: error.message });
  }
});

export const checkToken = createAsyncThunk('auth/checkToken', async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get('token');
      if (!token) throw new Error('No token found');
      const response = await axios.get('http://localhost:8080/api.myservice.com/v1/user/account', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { ...response.data.data, token };
    } catch (error) {
      return rejectWithValue({ message: 'Invalid token' });
    }
  });

  export const updateUser = createAsyncThunk('auth/updateUser', async ({ token, fullName, phone, address }, { rejectWithValue }) => {
    try {
      const response = await axios.put('http://localhost:8080/api.myservice.com/v1/user', {
        fullName,
        phone,
        address,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({ message: 'Failed to update profile' });
    }
  });  

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    fullName: null,
    email: null,
    roles: [],
    avatar: null,
    phone: null,
    address: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.fullName = null;
      state.email = null;
      state.roles = [];
      state.avatar = null;
      state.phone = null;
      state.address = null;
      Cookies.remove('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.message : action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.accessToken;
        state.fullName = action.payload.fullName;
        state.email = action.payload.email;
        state.roles = action.payload.roleSet.map(role => role.authority);
        state.avatar = action.payload.avatar;
        state.phone = action.payload.phone;
        state.address = action.payload.address;
        Cookies.set('token', state.token, { expires: 1 });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.message : action.error.message;
      })
      .addCase(checkToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.fullName = action.payload.fullName;
        state.email = action.payload.email;
        state.roles = action.payload.roleSet.map(role => role.authority);
        state.avatar = action.payload.avatar;
        state.phone = action.payload.phone;
        state.address = action.payload.address;
      })
      .addCase(checkToken.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Invalid token';
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.fullName = action.payload.fullName;
        state.phone = action.payload.phone;
        state.address = action.payload.address;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.message : action.error.message;
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
