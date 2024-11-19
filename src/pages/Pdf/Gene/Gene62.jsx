import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene62 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"PON1"}
                datas={[
                    "rs854569",
                    "rs854566",
                    "rs854570",
                    "rs854572",
                    "rs854560",
                    "rs854571",
                    "rs662",
                    "rs854555",
                    "rs854552",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、有機リン系化合物の解毒が不十分となる可能性があります。PON1（Paraoxonase 1）は、パラオキソナーゼ1という酵素をコードしており、血中のリポタンパク質（特にHDL）に結合し、脂質の酸化を防ぐ役割を担います。PON1は、特定の有機リン系農薬や環境毒素を解毒する役割も持ち、動脈硬化のリスクを低減します。"
                }
            />

            <GenePageNumber>103</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene62;
