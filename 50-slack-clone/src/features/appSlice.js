import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null,
    channels: [],
    roomDetails: [],
    channelSeleted: "",
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
    setChannels: ( state, action ) => {
      state.channels = action.payload;
    },
    setRoomDetails: ( state, action ) => {
      state.roomDetails = action.payload;
    },
    setChannelSeleted: ( state, action ) => {
      state.channelSeleted = action.payload
    }
  },
});

export const { enterRoom, setChannels, setRoomDetails, setChannelSeleted } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
