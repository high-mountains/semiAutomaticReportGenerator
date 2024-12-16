import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/Pdf/PageWrapper";
import PageHeader from "../../components/Pdf/PageHeader";
import PageNumber from "../../components/Pdf/PageNumber";
import Text from "../../components/Pdf/Text";
import Table from "../../components/Pdf/Table.jsx";

import pdfData from "../../utils/dummyPdf.json";
import { useSelector } from "react-redux";

const Supplement = ({ onExceedHeight, supplementalData, isFirstPage, pageNum }) => {
    const [sidbarColor, setSidebarColor] = useState(pdfData.mainColor);
    const supplementedData = useSelector((state) => state.pdfData.supplementedData);
    const [tableData, setTableData] = useState(supplementalData || []);

    useEffect(() => {
        if (!supplementalData) {
            setTableData(supplementedData);
        }
    }, [supplementedData, supplementalData]);

    const [tableHeight, setTableHeight] = useState(0);
    
    const handleTableHeightExceed = (remainingData) => {
        if (onExceedHeight) {
            onExceedHeight(remainingData);
        }
    };

    const calculateHeight = (tableElement) => {
        setTableHeight(tableElement.offsetHeight);  // Get table height dynamically
    };

    useEffect(() => {
        const tableElement = document.querySelector("table");
        if (tableElement) {
            calculateHeight(tableElement);
        }
    }, [tableData]);

    const heightThreshold = isFirstPage ? 632 : 712;  // First page threshold 640px, subsequent pages 780px based on design
    // const heightThreshold =  640;  // First page threshold 640px, subsequent pages 780px based on design

    // Trigger the action when height exceeds the threshold
    useEffect(() => {
        if (tableHeight > heightThreshold) {
            handleTableHeightExceed(tableData);
        }
    }, [tableHeight, heightThreshold, handleTableHeightExceed, tableData]);

    return (
        <PageWrapper>
            {isFirstPage && (
                <>
                    <PageHeader
                        subtitle={"Supplement"}
                        mainTitle={"あなたにおすすめのサプリメントや生活習慣"}
                        subTitleStyle={{ marginBottom: "5rem" }}
                        mainTitleStyle={{ fontSize: "28rem", letterSpacing: "-1.4rem" }}
                    />
                    <Text
                        sidebar={1}
                        sidebarColor={sidbarColor}
                        textContent={"おすすめのサプリメントや生活習慣"}
                    />
                </>
            )}
            <Table
                headerData={[
                    { content: "サプリメント・\n生活習慣", width: "129rem" },
                    { content: "摂取タイミング", width: "111.25rem" },
                    { content: "詳細", width: "151.25rem" },
                    { content: "関連するカテゴリー", width: "131.25rem" },
                ]}
                bodyData={tableData}
                onHeightExceed={handleTableHeightExceed}
                isFirstPage = {isFirstPage}
            />
            <PageNumber>{pageNum}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement;
