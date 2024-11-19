import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene74 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"CYP2B6"}
                datas={[
                    "rs3745274",
                    "rs139801276",
                    "rs2279343",
                    "rs34097093",
                    "rs36079186",
                    "rs28399499",
                    "rs373489637",
                    "rs4803419",
                    "rs186335453",
                    "rs281864907",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、特定の薬物や化学物質の代謝が不十分となる可能性があります。CYP2B6（Cytochrome P450 Family 2 Subfamily B Member 6）は、シトクロムP450酵素ファミリーの一員で、薬物や環境毒素、内因性物質の代謝に関与しています。CYP2B6は、肝臓で発現が高く、特定の薬物を水溶性に変換して排泄を促進する役割を果たしています。"
                }
            />
            <GeneInformationMiddle
                geneName={"CYP2C9"}
                datas={["rs1057910", "rs1799853"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ワルファリンや非ステロイド性抗炎症薬（NSAIDs）などの代謝が低下する可能性があります。CYP2C9（Cytochrome P450 Family 2 Subfamily C Member 9）は、主に肝臓で発現するシトクロムP450酵素で、抗凝血薬や抗炎症薬などの代謝に関与しています。この酵素は、薬物を酸化して水溶性を高め、体外への排泄を促します。"
                }
            />
            <GeneInformationMiddle
                geneName={"CYP2C19"}
                datas={[
                    "rs113164681",
                    "rs140278421",
                    "rs12248560",
                    "rs6413438",
                    "rs55752064",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、特定の薬物の代謝が遅くなる可能性があります。CYP2C19（Cytochrome P450 Family 2 Subfamily C Member 19）は、プロトンポンプ阻害薬や抗うつ薬など、さまざまな薬物の代謝を担う酵素です。CYP2C19も主に肝臓で発現し、化合物の酸化による解毒と排泄を助けます。"
                }
            />

            <GenePageNumber>115</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene74;
