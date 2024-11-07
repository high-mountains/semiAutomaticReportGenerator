import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import pages from "../routes/pages";
import { Suspense, lazy } from "react";
import SuspenseContent from "./SuspenseContent";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Pdf from "../pages/Pdf";
import AppContainer from "./AppContainer";

const Page404 = lazy(() => import("../pages/protected/404"));

function PageContent() {
  const mainContentRef = useRef(null);
  // const { pageTitle } = useSelector((state) => state.header);
  // const { pages: userPage } = useSelector((state) => state.user);
  
  // Scroll back to top on new page load
  // useEffect(() => {
  //   mainContentRef.current.scroll({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, [pageTitle]);

  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      {/* <div className="h-[20rem] m-[10rem] bg-red-100">sdsd</div> */}
      <main className="flex-1 overflow-y-auto bg-white" ref={mainContentRef}>
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
        {/* <div className="h-16"></div> */}
      </main>
    </div>
  );
}

export default PageContent;
