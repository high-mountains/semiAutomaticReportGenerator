// import { lazy, useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import "./style.css";

// const Page1 = lazy(() => import("./Page1"));
// const Page2 = lazy(() => import("./Page2"));
// const Page3 = lazy(() => import("./Page3"));
// const Page4 = lazy(() => import("./Page4"));

// import TypeByType from "./TypeByType";

// import AuthLayout from "../../layout/AuthLayout";
// const GenCategory = lazy(() => import("./GenCategory"));
// const Supplement = lazy(() => import("./Supplement"));
// const SupplementNot = lazy(() => import("./SupplementNot"));
// const SupplementTable = lazy(() => import("./SupplementTable"));
// const GeneInformationList = lazy(() => import("./GeneInformationList"));
// const References = lazy(() => import("./References"));
// const Pathway = lazy(() => import("./Pathway.jsx"));

// const Pdf = () => {
//     const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
//     const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

//     useEffect(() => {
//         setRenderedPdfFlag(pdfFlag);
//     }, [pdfFlag]);

//     const [showTotalPage, setShowTotalPage] = useState(
//         useSelector((state) => state.pdfData.totalPage)
//     );
//     const [showCurrentPage, setShowCurrentPage] = useState(
//         useSelector((state) => state.pdfData.currentRunningPage)
//     );

//     const receivedShowCurrentPage = useSelector(
//         (state) => state.pdfData.currentRunningPage
//     );
//     const receivedtotalPage = useSelector((state) => state.pdfData.totalPage);

//     useEffect(() => {
//         setShowCurrentPage(receivedShowCurrentPage);
//     }, [receivedShowCurrentPage]);

//     useEffect(() => {
//         setShowTotalPage(receivedtotalPage);
//     }, [receivedtotalPage]);

//     return (
//        <AuthLayout>
//         <>
//             {renderedPdfFlag && (
//                 <div
//                     style={{
//                         width: "100vw",
//                         height: "calc(100vh - 49rem)",
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "20rem",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         backgroundColor: "#000000dd",
//                         zIndex: 99,
//                         position: "absolute",
//                     }}
//                 >
//                     <p className="font text-[#FFFFFF]" style={{fontSize: "28rem"}}>
//                         遺伝子検査報告書作成中 {showCurrentPage}/{showTotalPage}
//                     </p>
//                     <div className="loader">
//                         <div className="dot dot1">
//                             <i></i>
//                         </div>
//                         <div className="dot dot2">
//                             <i></i>
//                         </div>
//                         <div className="dot dot3">
//                             <i></i>
//                         </div>
//                         <div className="dot dot4">
//                             <i></i>
//                         </div>
//                         <div className="dot dot5">
//                             <i></i>
//                         </div>
//                         <div className="dot dot6">
//                             <i></i>
//                         </div>
//                         <div className="dot dot7">
//                             <i></i>
//                         </div>
//                         <div className="dot dot8">
//                             <i></i>
//                         </div>
//                         <div className="dot dot9">
//                             <i></i>
//                         </div>
//                         <div className="dot dot10">
//                             <i></i>
//                         </div>
//                         <div className="dot dot11">
//                             <i></i>
//                         </div>
//                         <div className="dot dot12">
//                             <i></i>
//                         </div>
//                         <div className="dot dot13">
//                             <i></i>
//                         </div>
//                         <div className="dot dot14">
//                             <i></i>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <div className="pdfcontainer py-[20rem]">
//                 <div className="pdfwrapper">
//                     <Page1 />
//                     <Page2 />
//                     <Page3 />
//                     <Page4 />
//                     <TypeByType />
//                     <GenCategory />
//                     <Supplement />
//                     <SupplementNot /> 
//                     <SupplementTable />
//                     <GeneInformationList />
//                     <References />
//                     <Pathway />
//                 </div>
//             </div>
//         </>
//        </AuthLayout>
//     );
// };

// export default Pdf;

import { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeltaPage } from "../../features/common/pdfSlice.js";

import "./style.css";

const Page1 = lazy(() => import("./Page1"));
const Page2 = lazy(() => import("./Page2"));
const Page3 = lazy(() => import("./Page3"));
const Page4 = lazy(() => import("./Page4"));
const TypeByType = lazy(() => import("./TypeByType"));
const AuthLayout = lazy(() => import("../../layout/AuthLayout"));
const GenCategory = lazy(() => import("./GenCategory"));
const Supplement = lazy(() => import("./Supplement"));
const SupplementNot = lazy(() => import("./SupplementNot"));
const SupplementTable = lazy(() => import("./SupplementTable"));
const GeneInformationList = lazy(() => import("./GeneInformationList"));
const References = lazy(() => import("./References"));
const Pathway = lazy(() => import("./Pathway.jsx"));

const Pdf = () => {
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    
    // ========================For loading DNA Symbol==============
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const [showTotalPage, setShowTotalPage] = useState(
        useSelector((state) => state.pdfData.totalPage)
    );
    const [showCurrentPage, setShowCurrentPage] = useState(
        useSelector((state) => state.pdfData.currentRunningPage)
    );

    const receivedShowCurrentPage = useSelector(
        (state) => state.pdfData.currentRunningPage
    );
    const receivedtotalPage = useSelector((state) => state.pdfData.totalPage);

    useEffect(() => {
        setShowCurrentPage(receivedShowCurrentPage);
    }, [receivedShowCurrentPage]);

    useEffect(() => {
        setShowTotalPage(receivedtotalPage);
    }, [receivedtotalPage]);
    
    // ====================For Dynamic Page Reflection==================
    const [extraSupplements, setExtraSupplements] = useState([]);
    const [extraSupplementsForUnSupplement, setExtraSupplementsForUnSupplement] = useState([]);
    
    const [isFirstPage, setIsFirstPage] = useState(true);  // Track the first page
    const [isFirstPageForUnSupplement, setIsFirstPageForUnSupplement] = useState(true);  // Track the first page
    
    const dispatch = useDispatch();

    useEffect(() => {
        const deltaPage = extraSupplements.length + extraSupplementsForUnSupplement.length;
        dispatch(setDeltaPage(deltaPage))
    }, [extraSupplements, extraSupplementsForUnSupplement])
    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const handleExtraPage = (additionalData) => {
        setExtraSupplements((prev) => [...prev, additionalData]);
        setIsFirstPage(false);  // After first page, set to false
    };

    const handleExtraPageForUnSupplement = (additionalData) => {
        setExtraSupplementsForUnSupplement((prev) => [...prev, additionalData]);
        setIsFirstPageForUnSupplement(false);  // After first page, set to false
    };

    return (
        <AuthLayout>
            <>
                {renderedPdfFlag && (
                    <div
                        style={{
                            width: "100vw",
                            height: "calc(100vh - 49rem)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20rem",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#000000dd",
                            zIndex: 99,
                            position: "absolute",
                        }}
                    >
                        <p className="font text-[#FFFFFF]" style={{ fontSize: "28rem" }}>
                            遺伝子検査報告書作成中 {showCurrentPage}/{showTotalPage}
                        </p>
                        <div className="loader">
                            <div className="dot dot1">
                             <i></i>
                         </div>
                         <div className="dot dot2">
                             <i></i>
                         </div>
                         <div className="dot dot3">
                             <i></i>
                         </div>
                         <div className="dot dot4">
                             <i></i>
                         </div>
                         <div className="dot dot5">
                             <i></i>
                         </div>
                         <div className="dot dot6">
                             <i></i>
                         </div>
                         <div className="dot dot7">
                             <i></i>
                         </div>
                         <div className="dot dot8">
                             <i></i>
                         </div>
                         <div className="dot dot9">
                             <i></i>
                         </div>
                         <div className="dot dot10">
                             <i></i>
                         </div>
                         <div className="dot dot11">
                             <i></i>
                         </div>
                         <div className="dot dot12">
                             <i></i>
                         </div>
                         <div className="dot dot13">
                             <i></i>
                         </div>
                         <div className="dot dot14">
                             <i></i>
                         </div>
                        </div>
                    </div>
                )}

                <div className="pdfcontainer py-[20rem]">
                    <div className="pdfwrapper">
                        <Page1 />
                        <Page2 />
                        <Page3 />
                        <Page4 />
                        <TypeByType />
                        <GenCategory />
                        {/* Pass `isFirstPage` to the first Supplement */}
                        <Supplement key={0} onExceedHeight={handleExtraPage} isFirstPage={ true } pageNum={24} />
                        {extraSupplements.map((data, index) => (
                            <Supplement onExceedHeight={handleExtraPage} key={index + 1} supplementalData={data} isFirstPage={false} pageNum={25 + index}/>
                        ))}
                        <SupplementNot key={100} onExceedHeight={handleExtraPageForUnSupplement} isFirstPage={ true } pageNum={extraSupplements.length ? 25+extraSupplements.length : 25}/>
                        {extraSupplementsForUnSupplement.map((data, index) => (
                            <SupplementNot onExceedHeight={handleExtraPageForUnSupplement} key={index + 100} unsupplementalData={data} isFirstPage={false}  pageNum={26 + extraSupplements.length + index}/>
                        ))}
                        <SupplementTable />
                        <GeneInformationList />
                        <References />
                        <Pathway />
                    </div>
                </div>
            </>
        </AuthLayout>
    );
};

export default Pdf;
