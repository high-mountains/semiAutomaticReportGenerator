import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene84 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"TREM2"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"TREM2"}
                datas={["rs75932628", "rs143332484"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、脳内の炎症反応や老廃物の除去が不十分となる可能性があります。TREM2は、マイクログリアやマクロファージに発現する受容体タンパク質で、細胞のシグナル伝達や免疫応答の調節に関与しています。この受容体は、異物の認識や貪食を促進し、脳内での老廃物の除去や炎症応答の調整において重要な役割を果たします。"
                }
            />

            <GenePageNumber>125</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene84;
