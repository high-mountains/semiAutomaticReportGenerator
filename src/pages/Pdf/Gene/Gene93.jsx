import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene93 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"炎症ON"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"ACE"}
                datas={["rs4351", "rs4329", "rs4311"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、血圧調節や炎症反応が影響を受ける可能性があります。ACEは、アンジオテンシン変換酵素をコードしており、血圧の調節と電解質バランスの維持に関与しています。この酵素は、アンジオテンシンIをアンジオテンシンIIに変換し、血管の収縮を促進することで血圧を上昇させます。"
                }
            />
            <GeneInformationMiddle
                geneName={"C3"}
                datas={["rs10402876"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、炎症反応や免疫応答が影響を受ける可能性があります。C3は、補体システムの中心的な成分であり、免疫応答において病原体の除去と炎症反応の誘導に関与しています。C3は、感染や損傷の際に活性化され、補体カスケードを通じて細胞溶解やオプソニン化（病原体の識別と標識化）を促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"CACNA1C"}
                datas={["rs1006737"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞のシグナル伝達や炎症応答が影響を受ける可能性があります。CACNA1Cは、カルシウム電位依存性チャネルのα1Cサブユニットをコードしており、神経細胞や心筋細胞におけるカルシウムイオンの流入を調節します。このチャネルは、細胞の興奮性、筋収縮、ホルモン分泌に関与し、特に心筋の収縮と神経伝達において重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"CD14"}
                datas={["rs2569191"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。CD14は、主にマクロファージや単球、好中球の表面に存在する受容体タンパク質で、細胞がリポ多糖（LPS）や細菌の細胞壁成分などの病原体関連分子パターン（PAMPs）を認識するのに役立ちます。CD14は、免疫系が感染源や異物を認識するための重要な役割を果たし、炎症応答を誘導するシグナル伝達の一部として機能します。"
                }
            />

            <GenePageNumber>134</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene93;
