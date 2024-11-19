import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene57 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"活性酸素"} />

            <GeneInformationMiddle
                geneName={"G6PD"}
                datas={[
                    "rs762516",
                    "rs1050828",
                    "rs1050829",
                    "rs137852327",
                    "rs137852329",
                    "rs137852346",
                    "rs137852349",
                    "rs267606836",
                    "rs137852320",
                    "rs137852316",
                    "rs137852317",
                    "rs76723693",
                    "rs78365220",
                    "rs137852314",
                    "rs387906468",
                    "rs137852343",
                    "rs137852326",
                    "rs137852325",
                    "rs72554665",
                    "rs782090947",
                    "rs137852336",
                    "rs5030868",
                    "rs137852322",
                    "rs72554664",
                    "rs137852330",
                    "rs137852331",
                    "rs137852335",
                    "rs137852334",
                    "rs5030869",
                    "rs76645461",
                    "rs5030872",
                    "rs137852328",
                    "rs137852347",
                    "rs398123546",
                    "rs137852345",
                    "rs398123552",
                    "rs137852338",
                    "rs587776730",
                ]}
                level={-1}
                description={""}
            />

            <GenePageNumber>98</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene57;
