import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from 'react-hot-toast'
import { ConfigProvider } from "antd";
import { RecoilRoot } from 'recoil'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./app/store";
import { AuthProvider, useAuth } from './context/AuthContext'
import { Provider } from "react-redux";
import SuspenseContent from "./containers/SuspenseContent";

import "primereact/resources/themes/lara-light-cyan/theme.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback={<SuspenseContent />}>
     <RecoilRoot>
    <Provider store={store}>
      <AuthProvider>
        <ConfigProvider
          renderEmpty={""}
          theme={{
            token: {
              
            },
            components: {
              
            },
          }}
        >
          <App />
          <Toaster position="top-center" />
        </ConfigProvider>
      </AuthProvider>
    </Provider>
    </RecoilRoot>
  </Suspense>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();