import { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./style.css";

const Page1 = lazy(() => import("./Page1"));
const Page2 = lazy(() => import("./Page2"));
const Page3 = lazy(() => import("./Page3"));
const Page4 = lazy(() => import("./Page4"));

import TypeByType from "./TypeByType";

import AuthLayout from "../../layout/AuthLayout";
const GenCategory = lazy(() => import("./GenCategory"));
const Supplement = lazy(() => import("./Supplement"));
const SupplementNot = lazy(() => import("./SupplementNot"));
const SupplementTable = lazy(() => import("./SupplementTable"));
const GeneInformationList = lazy(() => import("./GeneInformationList"));
const References = lazy(() => import("./References"));
const Pathway = lazy(() => import("./Pathway.jsx"));

const Pdf = () => {
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
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

    return (
    //    <AuthLayout>
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
                    <p className="font text-[#FFFFFF]" style={{fontSize: "28rem"}}>
                        Genetic testing report being prepared. {showCurrentPage}/{showTotalPage} Pages
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
                    <Supplement />
                    <SupplementNot /> 
                    <SupplementTable />
                    <GeneInformationList />
                    <References />
                    <Pathway />
                </div>
            </div>
        </>
       // </AuthLayout>
    );
};

export default Pdf;
