import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import SuspenseContent from "./SuspenseContent";
import { useRef } from "react";
import Pdf from "../pages/Pdf";

function PageContent() {
  const mainContentRef = useRef(null);

  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main className="flex-1 overflow-y-scroll overflow-x-hidden bg-white" ref={mainContentRef}>
        <Suspense fallback={<SuspenseContent />}>
          <Routes>
            {/* {
              // routes.map((route, key) => {
              userPage.map((route, key) => {
                return (
                  <Route
                    key={key}
                    exact={true}
                    path={route.path}
                    element={
                      <AppContainer
                        {...route}
                        element={pages?.[route.name]?.component || Page404}
                      />
                    }
                  />
                );
              })
            } */}
            <Route key={"1"} exact={true} path="/pdf" element={<Pdf/>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default PageContent;
