import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "Search",
  initialState: {
    query: "",
    activeTab: "photos",
    loading: false,
    result: [],
    error: null,
    clearResult: "",
    savedItems:[],
    toast: { message: "", visible: false }
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    setResult: (state, action) => {
      state.result = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setClearResult: (state, action) => {
      state.result = [];
    },
    setSavedItems:(state,action)=>{
        state.savedItems = action.payload;
    },
    addSavedItem:(state,action)=>{
        if (!state.savedItems.some(item => item.id === action.payload.id)) {
          state.savedItems.push(action.payload);
        }
    },
    removeSavedItem:(state,action)=>{
        state.savedItems = state.savedItems.filter(item => item.id !== action.payload);
    },
    showToast:(state,action)=>{
        state.toast = { message: action.payload.message, type: action.payload.type, visible: true };
    },
    hideToast:(state)=>{
        state.toast = { message: "", type: "", visible: false };
    }
  },
});

export const  { setQuery, setActiveTab , setClearResult,setError ,setLoading,setResult ,setSavedItems, addSavedItem, removeSavedItem, showToast, hideToast} = searchSlice.actions

export const selectToast = (state) => state.search.toast;
export const selectSavedItems = (state) => state.search.savedItems;

export default searchSlice.reducer;
