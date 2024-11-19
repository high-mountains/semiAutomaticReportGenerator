import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene29 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"PANK2"}
                datas={[
                    "rs137852963",
                    "rs137852960",
                    "rs137852965",
                    "rs137852964",
                    "rs137852966",
                    "rs137852962",
                    "rs137852959",
                    "rs137852969",
                    "rs137852968",
                    "rs137852961",
                    "rs1250997630",
                    "rs148987163",
                    "rs28939088",
                    "rs1057518915",
                    "rs753376100",
                    "rs137852967",
                    "rs780551883",
                    "rs863223343",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ミトコンドリア内のエネルギー代謝や脂肪酸代謝に影響を与える可能性があります。PANK2（Pantothenate Kinase 2）は、パントテン酸キナーゼ2という酵素をコードしています。この酵素は、補酵素A（CoA）生合成の第一段階でパントテン酸（ビタミンB5）をリン酸化し、CoA生成の調節に寄与します。"
                }
            />

            <GenePageNumber>70</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene29;
