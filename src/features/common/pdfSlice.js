import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const refineGroup = (group) => ({
//   _id: group?._id,
//   title: group?.title,
//   del: group?.del,
//   parentId: group?.parentId,
// });

// const makeTree = (group, groups) => {
//   let nGroup = refineGroup(group);
//   let children = [];
//   groups.forEach((item) => {
//     if (item?.parentId === group?._id) children.push(makeTree(item, groups));
//   });
//   if (children.length) nGroup.children = children;
//   return nGroup;
// };

export const fetchPdfData = createAsyncThunk(
  "/pdf/fetchData",
  async () => {
    // let query = "";
    // if (payload) query += `?view=${payload}`;
    const res = await axios.get("/fetchPdfData");
    return res.data;
  }
);

// export const actionArticleCategory = createAsyncThunk(
//   "/actionArticleCategory",
//   async (payload) => {
//     const res = await axios.post("/fetchArticleCategories", payload);
//     return res.data;
//   }
// );

// export const changeCategory = createAsyncThunk(
//   "/changeCategory",
//   async (payload) => {
//     const res = await axios.put("/changeCategories", payload);
//     return res.data;
//   }
// );

// export const deleteArticleCategory = createAsyncThunk(
//   "/deleteArticleCategory",
//   async (payload) => {
//     const { id } = payload;
//     const res = await axios.delete("/fetchArticleCategories", {
//       params: { id },
//     });
//     return res.data;
//   }
// );

// export const addFirstCategory = createAsyncThunk(
//   "/createFirstCategory",
//   async (payload) => {
//     const firstCategory = {firstCategory : payload}
//     const res = await axios.post("/addFirstCategory", firstCategory);
//     return res.data
//   }
// );

export const pdfDataSlice = createSlice({
  name: "articleCategory",
  initialState: {
    clientName: "",//clientName
    clientId: "",
    mainColor: "",//mainColor (tag color)
    mainTextColor: "",//mainTextColor (text color)
    glutamateColor: "#ECAD14",
    catecholamineColor: "#F89550",
    histamineColor: "#E10D19",
    mitochodrialColor: "#56C578",
    detoxColor: "#9881D6",
    MethylationColor: "#2892DE",
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
            
    //   payload?.data?.length?
    //   state.articleCategories = [makeTree(payload.data.find( item => item.del === false && item.title !== 'UnGrouped' && item.parentId === undefined), payload.data.filter(item => item.del === false))]:
    //   state.articleCategories = [];

    //   payload?.data?.length?
    //   state.unGroupedCategories = [makeTree(payload.data.find( item => item.del === true && item.title === 'UnGrouped' && item.parentId === undefined), payload.data.filter(item => item.del === true ))]:
    //   state.unGroupedCategories = [];

    //   payload?.data?.length?
    //   state.articleCategoriesForPath = payload.data:
    //   state.articleCategoriesForPath = [];

    //   payload?.article?.length?
    //   state.articleList = payload.article:
    //   state.articleList = [];

    //   state.isLoading = false;
    //   state.isUpdated = false;
    },
    [fetchPdfData.rejected]: (state) => {
      state.isLoading = false;
    },

    // [actionArticleCategory.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [actionArticleCategory.fulfilled]: (state, { payload }) => {
    //   state.isUpdated = true;
    // },
    // [actionArticleCategory.rejected]: (state, { payload }) => {
    //   state.isUpdated = true;
    //   state.error = payload;
    //   state.isLoading = false;
    // },

    // [changeCategory.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [changeCategory.fulfilled]: (state, { payload }) => {
    //   state.isUpdated = true;
    // },
    // [changeCategory.rejected]: (state, { payload }) => {
    //   state.isUpdated = true;
    //   state.error = payload;
    //   state.isLoading = false;
    // },

    // [deleteArticleCategory.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [deleteArticleCategory.fulfilled]: (state, { payload }) => {
    //   state.isUpdated = true;
    // },
    // [deleteArticleCategory.rejected]: (state, { payload }) => {
    //   state.isUpdated = true;
    //   state.error = payload;
    //   state.isLoading = false;
    // },

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
