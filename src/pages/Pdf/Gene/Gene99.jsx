import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene99 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"TNF"}
                datas={["rs1800629", "rs361525", "rs1799964"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腫瘍壊死因子の産生が変動し、炎症反応が影響を受ける可能性があります。TNFは、主にマクロファージやT細胞から分泌される炎症性サイトカインで、免疫応答や炎症の誘導に重要な役割を持っています。TNFは、感染や損傷に応じて細胞死（アポトーシス）や炎症反応を促進し、病原体への防御や組織の修復に関与します。"
                }
            />

            <GenePageNumber>140</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene99;
