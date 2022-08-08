import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDateModalOpen: false
  },
  reducers: {
    onOpenDateModal: ( state ) => {
      state.isDateModalOpen = true;
    },
    onCloaseDateModal: ( state ) => {
      state.isDateModalOpen = true;
    },
  }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloaseDateModal } = uiSlice.actions;