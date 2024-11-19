import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene61 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"BCHE"}
                datas={[
                    "rs2668207",
                    "rs1803274",
                    "rs1799807",
                    "rs28933389",
                    "rs28933390",
                    "rs1126680",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、有機リン系化合物の解毒が不十分となる可能性があります。BCHEは、ブチリルコリンエステラーゼという酵素をコードしており、神経伝達物質の一種であるアセチルコリンの分解や、薬物や毒素の解毒に関与しています。BCHEは、主に肝臓で合成され、血中での解毒機能を担い、特定の薬物代謝や神経伝達の調整に寄与します。"
                }
            />
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
                    "この遺伝子に変異がある場合、有機リン系化合物の解毒が不十分となる可能性があります。CYP2B6（Cytochrome P450 Family 2 Subfamily B Member 6）は、シトクロムP450酵素ファミリーの一員で、薬物や環境毒素、内因性物質の代謝に関与しています。CYP2B6は、肝臓で発現が高く、特定の薬物を水溶性に変換して排泄を促進する役割を果たしています。"
                }
            />

            <GenePageNumber>102</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene61;
