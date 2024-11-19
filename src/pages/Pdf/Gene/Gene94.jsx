import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene94 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"IDO1"}
                datas={["rs9657182"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内のトリプトファン代謝や免疫応答が影響を受ける可能性があります。IDO1は、インドールアミン2,3-ジオキシゲナーゼという酵素をコードしており、トリプトファンをキヌレニンに変換する反応を触媒します。この経路は、免疫応答の調節に関与し、特に炎症や感染時にトリプトファンの利用を制限することで免疫系のバランスを調整します。"
                }
            />
            <GeneInformationMiddle
                geneName={"IL1B"}
                datas={["rs16944"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL1Bは、炎症性サイトカインであるインターロイキン1βをコードしており、特に感染や組織損傷に応じてマクロファージから分泌されます。IL1Bは、免疫細胞の活性化や炎症反応を促進し、体内の防御メカニズムを誘導する働きを持っています。"
                }
            />
            <GeneInformationMiddle
                geneName={"IL2"}
                datas={["rs2069762"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL2は、T細胞によって分泌されるサイトカインで、特にT細胞の増殖、分化、および活性化を促進する役割を担っています。IL2は、免疫応答の強化と持続に必要不可欠で、自己免疫や感染防御において重要な役割を果たします。"
                }
            />
            <GeneInformationMiddle
                geneName={"IL4"}
                datas={["rs2243250"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL4は、主にヘルパーT細胞（Th2）やマスト細胞によって分泌されるサイトカインで、B細胞の活性化と抗体産生の誘導に関与しています。IL4は、IgE抗体の生成を促進し、アレルギー反応や寄生虫感染に対する免疫応答を調整します。"
                }
            />

            <GenePageNumber>135</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene94;
