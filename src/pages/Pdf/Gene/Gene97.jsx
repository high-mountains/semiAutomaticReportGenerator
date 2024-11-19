import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene97 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"TRAF1"}
                datas={["rs3761847"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、炎症シグナル伝達の調整が不十分となる可能性があります。TRAF1は、TNF受容体関連因子であり、TNFシグナル伝達の調節を行うタンパク質です。TRAF1は、主に細胞の生存や炎症反応のシグナル伝達に関わり、細胞がストレスや免疫刺激に応答する際に必要な役割を果たします。"
                }
            />

            <GenePageNumber>138</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene97;
