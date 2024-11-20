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
    clientName: "Murayama",// clientName
    clientId: "98236",
    
    mainColor: "#00C3D0",// mainColor (tag color) cyan
    mainTextColor: "#484F51",//mainTextColor (text color)
    
    glutamateColor: "#ECAD14",
    catecholamineColor: "#F89550",
    histamineColor: "#E10D19",
    mitochodrialColor: "#56C578",
    detoxColor: "#9881D6",
    methylationColor: "#2892DE",

    categoryData: [],
    geneInformationListData: {},
    typeData: [5,5,5,5,5,5],

    supplementedData: [{Lifestyle: "未定", When: "未定", Explanation: "未定", Categories: "未定"}],
    unsupplementedData: [{Lifestyle: "未定", When: "未定", Explanation: "未定", Categories: "未定"}],

    // geneInformationListData: {},
    isLoading: false,
    isUpdated: true,//new article category is added or updated or deleted.
    error: null,
  },
  reducers: {
    loadArticleSuccessCategory: (state, { payload }) => {},

    csvDataUpload: (state, {payload}) => {
      const category_data = payload.find(file => file.fileName === "category_data.csv");
      state.categoryData = category_data.data;
      
      const geneInformationList_data = payload.find(file => file.fileName === "rsid_data.csv");
      const geneInformationListData = geneInformationList_data.data;
      const processedGeneInformationListData = geneInformationListData.reduce((acc, { rsid, Result }) => {
        acc[rsid] = Result;
        return acc;
      }, {});
      state.geneInformationListData = processedGeneInformationListData;

      const type_Data = payload.find(file => file.fileName === "type_data.csv");
      const typeDatas = type_Data.data;
      const order = [
        "Methylation ",
        "Catecholamine",
        "Detox",
        "Mitochondria",
        "Histamine",
        "Catecholamine"
      ];
      const glutamateScore = typeDatas.find(item => item.Type === "Glutamate").Score;
      const sortedScores = typeDatas
        .filter(item => item.Type !== "Glutamate") // Exclude Glutamate for sorting
        .sort((a, b) => order.indexOf(a.Type) - order.indexOf(b.Type))
        .map(item => item.Score); // Extract scores only
      // Add the Glutamate score to the beginning of the sorted list
      const finalScores = [glutamateScore, ...sortedScores];
      state.typeData = finalScores;

      const supplementedData = payload.find(file => file.fileName === "recommend_data.csv").data;
      state.supplementedData = supplementedData;
      console.log("supplemendtedData in Store====>", supplementedData);
      
      const unsupplementedData = payload.find(file => file.fileName === "not_recommend_data.csv").data;
      
      state.unsupplementedData = unsupplementedData;
      
      console.log("not_recommend_data in Store====>", unsupplementedData);
    }
  },
  extraReducers: {
    // [fetchPdfData.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [fetchPdfData.fulfilled]: (state, { payload }) => {
    //     payload?.data?.length?
    //     state.clientName = payload.data.clientName: state.clientName = "clientName undefined yet"

    //     payload?.data?.length?
    //     state.clientId = payload.data.clientId: state.clientId = "clientId undefined yet"

    //     payload?.data?.length?
    //     state.mainColor = payload.data.mainColor: state.mainColor = "mainColor undefined yet"

    //     payload?.data?.length?
    //     state.mainColor = payload.data.mainColor: state.mainColor = "mainColor undefined yet"
            
    // },
    // [fetchPdfData.rejected]: (state) => {
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

export const { loadArticleSuccessCategory, csvDataUpload } = pdfDataSlice.actions;
export default pdfDataSlice.reducer;
