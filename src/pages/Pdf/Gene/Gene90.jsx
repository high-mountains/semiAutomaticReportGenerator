import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene90 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"ミルク"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"TMPRSS6"}
                datas={["rs855791"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、鉄の代謝調節に影響を与える可能性があります。TMPRSS6は、膜貫通型セリンプロテアーゼで、特にヘプシジンの調節を通じて体内の鉄代謝を制御します。このタンパク質は、肝臓でヘプシジンの発現を抑制し、鉄の吸収と利用を調整します。"
                }
            />

            <GenePageNumber>131</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene90;
