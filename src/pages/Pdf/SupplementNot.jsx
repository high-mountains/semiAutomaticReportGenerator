import React, { useState, useEffect } from "react";
import PageWrapper from "../../components/Pdf/PageWrapper.jsx";
import PageHeader from "../../components/Pdf/PageHeader.jsx";
import PageNumber from "../../components/Pdf/PageNumber.jsx";
import Text from "../../components/Pdf/Text.jsx";
import Table from "../../components/Pdf/Table.jsx";

import pdfData from "../../utils/dummyPdf.json";
import { useSelector } from "react-redux";

const SupplementNot = () => {
    const [sidebarColor, setSidebarColor] = useState(pdfData.mainColor);
    const [tableData, setTableData] = useState([]);
    const unsupplementedData = useSelector((state) => state.pdfData.unsupplementedData);

    useEffect(() => {
        setTableData(unsupplementedData);
    }, [unsupplementedData]);

    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Supplement"}
                mainTitle={"Not Recommended Supplements and Lifestyle"}
                subTitleStyle={{
                    marginBottom: "5rem",
                }}
                mainTitleStyle={{
                    fontSize: "28rem",
                    letterSpacing: "-1.4rem",
                }}
            />
            <Text
                sidebar={1}
                sidebarColor={sidebarColor}
                textContent={"Supplements and Lifestyle Not Recommended"}
            />
            <Table
                headerData={[
                    {
                        content: "Supplements/\nLifestyle",
                        width: "129rem",
                    },
                    {
                        content: "Timing",
                        width: "111.25rem",
                    },
                    {
                        content: "Details",
                        width: "151.25rem",
                    },
                    {
                        content: "Related Categories",
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
