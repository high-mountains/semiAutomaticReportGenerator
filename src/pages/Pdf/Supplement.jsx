import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/Pdf/PageWrapper";
import PageHeader from "../../components/Pdf/PageHeader";
import PageNumber from "../../components/Pdf/PageNumber";
import Text from "../../components/Pdf/Text";
import Table from "../../components/Pdf/Table.jsx";

import pdfData from "../../utils/dummyPdf.json";
import { useSelector } from "react-redux";

const Supplement = () => {
    const [sidebarColor, setSidebarColor] = useState(pdfData.mainColor);
    const [tableData, setTableData] = useState([]);
    const supplementedData = useSelector((state) => state.pdfData.supplementedData);

    useEffect(() => {
        setTableData(supplementedData);
    }, [supplementedData]);

    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Supplement"}
                mainTitle={"Recommended Supplements and Lifestyle"}
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
                textContent={"Recommended Supplements and Lifestyle"}
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
            <PageNumber>24</PageNumber>
        </PageWrapper>
    );
};

export default Supplement;
