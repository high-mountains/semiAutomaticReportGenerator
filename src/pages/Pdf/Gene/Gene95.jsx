import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene95 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"IL5"}
                datas={["rs2069812"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL5は、主にヘルパーT細胞（Th2）や好酸球によって分泌され、好酸球の成長、分化、および活性化を促進する役割を担います。IL5は、寄生虫感染やアレルギー反応において重要で、特に好酸球が関与する免疫応答の調整に寄与します。"
                }
            />
            <GeneInformationMiddle
                geneName={"IL6"}
                datas={["rs1800795", "rs1800796", "rs1800797"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL6は、感染や組織損傷に応じてマクロファージやT細胞、その他の免疫細胞によって分泌される炎症性サイトカインで、急性期反応や慢性炎症の調整に重要な役割を果たします。IL6は、免疫細胞の活性化や抗体の産生を促進することで、体内の防御反応を強化します。"
                }
            />
            <GeneInformationMiddle
                geneName={"IL6R"}
                datas={["rs4129267"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL6Rは、IL6受容体をコードしており、細胞表面に存在してIL6と結合することで細胞内シグナル伝達を開始します。IL6Rは、特に免疫細胞や肝細胞で発現が高く、炎症応答や急性期タンパク質の生成に関わります。"
                }
            />
            <GeneInformationMiddle
                geneName={"IL10"}
                datas={["rs1800871", "rs1800896", "rs3024505"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL10（Interleukin 10）は、抗炎症性のサイトカインで、免疫応答の調節に重要な役割を果たします。この分子は、マクロファージやT細胞などの免疫細胞から分泌され、炎症性サイトカインの産生を抑制することで免疫系の過剰な活性化を防ぎます。"
                }
            />

            <GenePageNumber>136</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene95;
