import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPdfData = createAsyncThunk(
  "/pdf/fetchData",
  async () => {
    const res = await axios.get("/fetchPdfData");
    return res.data;
  }
);

export const setPdfFlag = createAsyncThunk(
  "/pdfData/setPdfFlag",
  async (payload) => {
    return payload;
  }
);

export const setCurrentRunningPage = createAsyncThunk(
  "/pdfData/setCurrentRunningPage",
  async (payload) => {
    return payload;
  }
);
export const setTotalPage = createAsyncThunk(
  "/pdfData/setTotalPage",
  async (payload) => {
    return payload;
  }
);
export const setDeltaPage = createAsyncThunk(
  "/pdfData/setDeltaPage",
  async (payload) => {
    return payload;
  }
);

export const pdfDataSlice = createSlice({
  name: "articleCategory",
  initialState: {
    clientName: "XX XX",// clientName
    clientId: "98236",
    reportDate: "2024年10月1日",

    mainColor: "#00C3D0",// mainColor (tag color) cyan
    mainTextColor: "#484F51",// mainTextColor (text color)
    
    glutamateColor: "#ECAD14",
    catecholamineColor: "#F89550",
    histamineColor: "#E10D19",
    mitochodrialColor: "#56C578",
    detoxColor: "#9881D6",
    methylationColor: "#2892DE",

    categoryData: [],
    geneInformationListData: {},
    typeData: [0,0,0,0,0,0],
    typeHighlight: ["0", "0", "0", "0", "0", "0"],

    supplementedData: [{Lifestyle: "未定", When: "未定", Explanation: "未定", Categories: "未定"}],
    unsupplementedData: [{Lifestyle: "未定", When: "未定", Explanation: "未定", Categories: "未定"}],
    
    geneData: [],
    deltaPage: 0,

    isLoading: false,
    isUpdated: true,//new article category is added or updated or deleted.
    error: null,
    pdfFlag: false,
    totalPage: 0,
    currentRunningPage: 10,
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
        "Methylation",
        "Detox",
        "Mitochondria",
        "Histamine",
        "Catecholamine",
      ];
      const glutamateScore = typeDatas.find(item => item.Type === "Glutamate").Score;
      const sortedScores = typeDatas
        .filter(item => item.Type !== "Glutamate") // Exclude Glutamate for sorting
        .sort((a, b) => order.indexOf(a.Type) - order.indexOf(b.Type))
        .map(item => item.Score); // Extract scores only
      const finalScores = [glutamateScore, ...sortedScores];
      const highlight = typeDatas.map(item => item.Result);
      state.typeHighlight = highlight;
      console.log("highlight in store==>", highlight);
      
      state.typeData = finalScores;

      const supplementedData = payload.find(file => file.fileName === "recommend_data.csv").data;
      state.supplementedData = supplementedData;
      
      const unsupplementedData = payload.find(file => file.fileName === "not_recommend_data.csv").data;
      state.unsupplementedData = unsupplementedData;

      const geneData = payload.find(file => file.fileName === "gene_data.csv").data;
      // console.log("geneData in store==>", geneData);
      state.geneData = geneData;

      const userData = payload.find(file => file.fileName === "user_data.csv").data[0];
      state.clientId = userData.ID;
      state.clientName = userData.name;
      state.reportDate = userData.date;
    }
  },

  extraReducers: {
    [setPdfFlag.pending]: (state, {payload}) => {
      // state.isLoading = true;
      state.pdfFlag = payload;
    },
    [setPdfFlag.fulfilled]: (state, { payload }) => {
      state.pdfFlag = payload;
    },
    
    [setPdfFlag.rejected]: (state, { payload }) => {
      state.pdfFlag = payload;
    },

    [setCurrentRunningPage.pending]: (state, {payload}) => {
      // state.currentRunningPage = payload;
    },
    [setCurrentRunningPage.fulfilled]: (state, {payload}) => {
      state.currentRunningPage = payload;
    },
    // [setCurrentRunningPage.rejected]: (state, {payload}) => {
    //   state.currentRunningPage = payload;
    // },
    
    [setTotalPage.fulfilled]: (state, {payload}) => {
      state.totalPage = payload;
    },

    [setDeltaPage.fulfilled]: (state, {payload}) => {
      state.deltaPage = payload;
    }
    
  },
});

export const { loadArticleSuccessCategory, csvDataUpload } = pdfDataSlice.actions;
export default pdfDataSlice.reducer;