import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene92 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"ビタミン&ミネラル"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"PEMT"}
                datas={["rs12325817"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞膜の健康や脂質代謝に影響を与える可能性があります。PEMT（Phosphatidylethanolamine N-Methyltransferase）は、ホスファチジルエタノールアミンN-メチルトランスフェラーゼという酵素をコードしています。この酵素は、ホスファチジルエタノールアミンをホスファチジルコリンに変換する反応を触媒し、肝臓でのホスファチジルコリンの内因性合成に関わります。"
                }
            />
            <GeneInformationMiddle
                geneName={"SELENOS"}
                datas={["rs34713741", "rs28665122", "rs28665122"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化作用を持つセレンタンパク質の機能が低下する可能性があります。SELENOS（Selenoprotein S）は、セレノプロテインSをコードしており、細胞内の小胞体に存在して、タンパク質の品質管理とストレス応答に関与します。SELENOSは、異常なタンパク質の分解をサポートし、炎症反応の調節にも寄与しています。"
                }
            />

            <GenePageNumber>133</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene92;
