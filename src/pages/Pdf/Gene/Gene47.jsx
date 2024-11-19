import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene47 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"フェーズII N-アセチルトランスフェラーゼ"}
            />

            <GeneInformationMiddle
                geneName={"NAT1"}
                datas={[
                    "rs15561",
                    "rs6586714",
                    "rs1474593589",
                    "rs1275254501",
                    "rs775745792",
                    "rs1182777627",
                    "rs770576147",
                    "rs4986782",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内でのアミン類や薬物の代謝が不十分となる可能性があります。NAT1（N-Acetyltransferase 1）は、芳香族アミンやヒドラジン類などの化合物をアセチル化して解毒する役割を担う酵素をコードしています。この酵素は、特に薬物や環境毒素の代謝に関与し、化合物の水溶性を高めて排出を促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"NAT2"}
                datas={[
                    "rs1495741",
                    "rs1208",
                    "rs1799930",
                    "rs1801280",
                    "rs1801279",
                    "rs1799931",
                    "rs1041983",
                    "rs1799929",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内でのアミン類や薬物の代謝が不十分となる可能性があります。\nNAT2（N-Acetyltransferase 2）は、N-アセチルトランスフェラーゼ2という酵素をコードしており、特定の薬物や環境毒素、芳香族アミンのアセチル化に関与しています。この酵素は、薬物代謝の速度に影響を与え、個人の薬物応答に関わる重要な要因です。"
                }
            />

            <GenePageNumber>88</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene47;
