import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPdfData = createAsyncThunk(
  "/pdf/fetchData",
  async () => {
    const res = await axios.get("/fetchPdfData");
    return res.data;
  }
);

export const pdfDataSlice = createSlice({
  name: "articleCategory",
  initialState: {
    clientName: "Murayama",//clientName
    clientId: "98236",
    
    mainColor: "#00C3D0",//mainColor (tag color) cyan
    mainTextColor: "#484F51",//mainTextColor (text color)
    
    glutamateColor: "#ECAD14",
    catecholamineColor: "#F89550",
    histamineColor: "#E10D19",
    mitochodrialColor: "#56C578",
    detoxColor: "#9881D6",
    methylationColor: "#2892DE",

    isLoading: false,
    isUpdated: true,//new article category is added or updated or deleted.
    error: null,
  },
  reducers: {
    loadArticleSuccessCategory: (state, { payload }) => {},
  },
  extraReducers: {
    [fetchPdfData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPdfData.fulfilled]: (state, { payload }) => {
        payload?.data?.length?
        state.clientName = payload.data.clientName: state.clientName = "clientName undefined yet"

        payload?.data?.length?
        state.clientId = payload.data.clientId: state.clientId = "clientId undefined yet"

        payload?.data?.length?
        state.mainColor = payload.data.mainColor: state.mainColor = "mainColor undefined yet"

        payload?.data?.length?
        state.mainColor = payload.data.mainColor: state.mainColor = "mainColor undefined yet"
            
    },
    [fetchPdfData.rejected]: (state) => {
      state.isLoading = false;
    },

    // [addFirstCategory.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [addFirstCategory.fulfilled]: (state, {payload}) => {
    //   state.isLoading = false;
    //   state.articleCategories = [makeTree(payload?.data, [payload?.data])];
    //   state.unGroupedCategories = [makeTree(payload?.unGr, [payload?.unGr])];
    //   state.isUpdated = false;
    // },
    // [addFirstCategory.rejected]: (state, {payload}) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // }
  },
});

export const { loadArticleSuccessCategory } = pdfDataSlice.actions;
export default pdfDataSlice.reducer;
