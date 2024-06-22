import {
  createActionCreatorInvariantMiddleware,
  createSlice,
} from "@reduxjs/toolkit";
import { offset_liveChat } from "../utils/Constants";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(offset_liveChat, 2);
      state.messages.push(action.payload);
    },
    liveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});
export const { addMessage, liveMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
