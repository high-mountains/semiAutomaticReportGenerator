import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene36 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"CHKA"}
                datas={[
                    "rs10791957"
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、コリンの代謝や細胞膜リン脂質の合成が低下する可能性があります。\nCHKA（Choline Kinase Alpha）は、コリンキナーゼαという酵素をコードしており、コリンをホスホコリンに変換する反応を触媒します。"
                }
            />
            <GeneInformationMiddle
                geneName={"ELOVL2"}
                datas={["rs953413"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、長鎖不飽和脂肪酸の合成が阻害される可能性があります。ELOVL2（Elongation of Very Long Chain Fatty Acids Protein 2）は、非常に長鎖の脂肪酸を延長する酵素をコードしています。この酵素は、脂肪酸合成経路において、特に長鎖ポリ不飽和脂肪酸（PUFA）の生成に関与し、細胞膜の構造や機能、シグナル伝達に重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"PEMT"}
                datas={["rs12325817"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、肝臓の脂質代謝に影響を与える可能性があります。PEMT（Phosphatidylethanolamine N-Methyltransferase）は、ホスファチジルエタノールアミンN-メチルトランスフェラーゼという酵素をコードしています。この酵素は、ホスファチジルエタノールアミンをホスファチジルコリンに変換する反応を触媒し、肝臓でのホスファチジルコリンの内因性合成に関わります。"
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

            <GenePageNumber>77</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene36;
