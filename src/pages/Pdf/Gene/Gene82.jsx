import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene82 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"FOXO3A"}
                datas={["rs2802292", "rs1935949", "rs479744"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞のストレス応答やDNA修復、アポトーシスの制御が影響を受ける可能性があります。FOXO3Aは、フォークヘッドボックスO転写因子の一種で、細胞のストレス応答、アポトーシス、代謝、抗酸化防御を調節する役割を担っています。このタンパク質は、酸化ストレスや栄養状態に応じて活性化し、抗酸化酵素の発現を促進することで細胞の長寿や健康をサポートします。"
                }
            />
            <GeneInformationMiddle
                geneName={"IGF1R"}
                datas={["rs2229765"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞の成長や代謝調整が影響を受ける可能性があります。IGF1Rは、インスリン様成長因子1（IGF-1）受容体をコードしており、成長、発達、細胞増殖、代謝に重要な役割を果たします。この受容体はIGF-1と結合して細胞増殖シグナルを活性化し、骨や筋肉の成長、組織の修復を促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"IL-6"}
                datas={["rs2069837"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、炎症応答の調節が変動する可能性があります。IL-6は、炎症反応や免疫応答に関与するサイトカインで、特に急性期反応や慢性炎症において中心的な役割を果たします。この分子は、感染や組織損傷時にマクロファージやT細胞から分泌され、免疫細胞の活性化、抗体の産生を促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"IMPK"}
                datas={["rs6481383"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、エネルギー代謝や細胞の老化プロセスが影響を受ける可能性があります。IMPKは、イノシトール一リン酸キナーゼをコードする酵素で、イノシトールのリン酸化反応を介してイノシトール代謝を調節します。この酵素は、細胞シグナル伝達や細胞膜の構成に必要なイノシトールリン酸化合物の生成に関与しています。"
                }
            />

            <GenePageNumber>123</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene82;
