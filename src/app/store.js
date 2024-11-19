import { configureStore } from "@reduxjs/toolkit";
import modal from "../features/common/modalSlice";
import sidebar from "../features/common/sidebarSlice";
import user from "../features/user/userSlice";
import common from "../features/common/commonSlice";
import pdfSlice from "../features/common/pdfSlice";

const combinedReducer = {
  pdfData: pdfSlice,
  user,
  common,
  modal,
  sidebar,
};

export default configureStore({
  reducer: combinedReducer,
});