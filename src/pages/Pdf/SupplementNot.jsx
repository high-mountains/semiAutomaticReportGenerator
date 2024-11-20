import React, { useState, useEffect } from "react";
import PageWrapper from "../../components/Pdf/PageWrapper.jsx";
import PageHeader from "../../components/Pdf/PageHeader.jsx";
import PageNumber from "../../components/Pdf/PageNumber.jsx";
import Text from "../../components/Pdf/Text.jsx";
import Table from "../../components/Pdf/Table.jsx";

import pdfData from "../../utils/dummyPdf.json"
import { useSelector } from "react-redux";

const SupplementNot = () => {
    const [sidbarColor, setSidebarColor] = useState(pdfData.mainColor);
    const [tableData, setTableData] = useState([]);
    const tt = useSelector((state) => state.pdfData.unsupplementedData)
    
    useEffect(() => {
        console.log("tableData in frontend===>", tt);
        setTableData(tt)
    }, [tt]);

    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Supplement"}
                mainTitle={"おすすめしないサプリメントや生活習慣"}
                subTitleStyle={{
                    marginBottom:"5rem"
                }}
                mainTitleStyle={{
                    fontSize:"28rem",
                    letterSpacing:"-1.4rem"
                }}
            />
            <Text
                sidebar={1}
                sidebarColor={sidbarColor}
                textContent={"おすすめのサプリメントや生活習慣"}
            />
            <Table
                headerData={[
                    {
                        content: "サプリメント・\n生活習慣",
                        width: "129rem",
                    },
                    {
                        content: "摂取タイミング",
                        width: "111.25rem",
                    },
                    {
                        content: "詳細",
                        width: "151.25rem",
                    },
                    {
                        content: "関連するカテゴリー",
                        width: "131.25rem",
                    },
                ]}
                bodyData={tableData}
            />
            <PageNumber>25</PageNumber>
        </PageWrapper>
    );
};

export default SupplementNot;
