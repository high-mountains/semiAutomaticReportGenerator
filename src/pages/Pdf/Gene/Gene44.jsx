import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene44 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"SLCO1B1"}
                datas={["rs4149056"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。\nSLCO1B1（Solute Carrier Organic Anion Transporter Family Member 1B1）は、肝細胞で発現する有機アニオントランスポーターをコードしており、特定の薬物や内因性化合物（胆汁酸やビリルビンなど）を肝臓に取り込む役割を果たします。SLCO1B1は、薬物の血中濃度や効果に影響を与え、特にスタチン系薬物の代謝に重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"XPC"}
                datas={["rs2228001"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。\nXPC（Xeroderma Pigmentosum Complementation Group C）は、DNA修復タンパク質をコードしており、特に紫外線や環境要因によって引き起こされたDNA損傷の修復に関与します。XPCは、損傷したDNA領域を認識し、修復機構であるヌクレオチド除去修復（NER）経路を開始するために重要な役割を果たしています。"
                }
            />

            <GenePageNumber>85</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene44;
