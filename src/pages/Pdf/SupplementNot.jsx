import React, { useState, useEffect } from "react";
import PageWrapper from "../../components/Pdf/PageWrapper.jsx";
import PageHeader from "../../components/Pdf/PageHeader.jsx";
import PageNumber from "../../components/Pdf/PageNumber.jsx";
import Text from "../../components/Pdf/Text.jsx";
import Table from "../../components/Pdf/TableForNotSupplement.jsx";

import pdfData from "../../utils/dummyPdf.json";
import { useSelector } from "react-redux";

const SupplementNot = ({ onExceedHeight, unsupplementalData, isFirstPage, pageNum }) => {
    const [sidbarColor, setSidebarColor] = useState(pdfData.mainColor);
    const [tableData, setTableData] = useState(unsupplementalData || []);
    const unsupplementedData = useSelector(
        (state) => state.pdfData.unsupplementedData
    );

    useEffect(() => {
        if (!unsupplementalData) {
            setTableData(unsupplementedData);
        }
    }, [unsupplementedData, unsupplementalData]);

    const [tableHeight, setTableHeight] = useState(0);

    const handleTableHeightExceed = (remainingData) => {
        if (onExceedHeight) {
            onExceedHeight(remainingData);
        }
    };

    const calculateHeight = (tableElement) => {
        setTableHeight(tableElement.offsetHeight); // Get table height dynamically
    };

    useEffect(() => {
        const tableElement = document.querySelector("table");
        if (tableElement) {
            calculateHeight(tableElement);
        }
    }, [tableData]);

    const heightThreshold = isFirstPage ? 632 : 712; // First page threshold 640px, subsequent pages 780px based on design
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
                        subtitle={"Supplement & Lifestyle"}
                        mainTitle={"おすすめしないサプリメントや生活習慣"}
                        subTitleStyle={{
                            marginBottom: "5rem"
                        }}
                        mainTitleStyle={{
                            fontSize: "28rem",
                            letterSpacing: "-1.4rem"
                        }}
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
                    {
                        content: "生活習慣",
                        width: "100rem"
                    },
                    {
                        content: "詳細",
                        width: "315rem"
                    },
                    {
                        content: "関連するカテゴリー",
                        width: "120rem"
                    }
                ]}
                bodyData={tableData}
                onHeightExceed={handleTableHeightExceed}
                isFirstPage = {isFirstPage}
            />
            <PageNumber>{pageNum ? pageNum : 25}</PageNumber>
        </PageWrapper>
    );
};

export default SupplementNot;
