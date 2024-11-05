import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./app/store";
import { Provider } from "react-redux";
import SuspenseContent from "./containers/SuspenseContent";

import "primereact/resources/themes/lara-light-cyan/theme.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback={<SuspenseContent />}>
    <Provider store={store}>

      <ConfigProvider
        renderEmpty={""}
        theme={{
          token: {
            colorPrimary: "#1677ff",
            colorBgElevated: "hsl(var(--b1))",
            colorText: "hsla(var(--bc))",

            colorBgContainer: "hsl(var(--b1))",

            colorTextHeading: "hsla(var(--bc))",

            colorFillContentHover: "hsl(var(--b1))",

            colorBorder: "hsl(var(--bc) / 0.2)",
            fontFamily: "inherit",
            // fontSize: "1rem",
            colorIcon: "hsla(var(--bc))",

            colorBgLayout: "hsl(var(--b1))",
            colorBorderBg: "hsl(var(--bc) / 0.2)",

            colorInfoTextHover: "hsl(var(--bc) / 0.2)",
            colorInfoActive: "hsl(var(--bc) / 0.2)",

            // colorFillAlter: '#242933',
            colorTextDisabled: "hsla(var(--bc))",

            colorPrimaryActive: "hsl(var(--bc) / 0.2)",
            colorPrimaryTextActive: "hsl(var(--bc) / 0.2)",
            colorPrimaryBorderHover: "hsl(var(--bc) / 0.2)",
            colorPrimaryTextHover: "hsl(var(--bc) / 0.2)",
            colorPrimaryHover: "hsl(var(--bc) / 0.2)",

            padding: 8,
            paddingContentVertical: 8,
            paddingContentHorizontal: 8,
            // paddingContentHorizontalSM: 8,
            paddingContentVerticalLG: 8,
          },
          components: {
            Table: {
              // colorFillAlter: 'hsl(var(--bc) / 0.2)',
              borderRadius: 0,
              borderColor: "hsl(var(--bc) / 0.2)",
              headerBorderRadius: 0,
              // colorText: 
              // padding: 8,
              paddingContentVertical: 4,
              paddingContentHorizontal: 4,
              paddingContentHorizontalSM: 4,
              paddingContentVerticalLG: 4,
              fontSize: '0.85rem',
              headerSortHoverBg: "hsl(var(--b1))",
              headerSortActiveBg: "hsl(var(--b1))",
              bodySortBg: "hsl(var(--b1))",
            },
            Tree: {
              fontSize: "1rem",
              fontFamily: "inherit",
              nodeSelectedBg: "hsl(var(--bc) / 0.2)",
              nodeHoverBg: "hsl(var(--bc) / 0.2)",
            },
            Select: {
              optionSelectedBg: "hsl(var(--bc) / 0.2)",
              colorTextPlaceholder: "hsla(var(--bc)/ 0.5)",
            },
            TreeSelect: {
              nodeSelectedBg: "hsl(var(--bc) / 0.2)",
              optionSelectedBg: "hsl(var(--bc) / 0.2)",
              colorTextPlaceholder: "hsla(var(--bc)/ 0.5)",
            },
            Button: {
              fontSize: "1rem",
            },
            DatePicker: {
              colorTextPlaceholder: "hsla(var(--bc)/ 0.5)"
            },
            Input: {
              colorTextDisabled: "hsl(var(--bc) / 0.2)",
              colorTextPlaceholder: "hsla(var(--bc)/ 0.5)"
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();