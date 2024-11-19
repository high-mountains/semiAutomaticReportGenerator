import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene69 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"葉酸"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"DHFR"}
                datas={["rs121913223", "rs387906619"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、葉酸の活性型であるテトラヒドロ葉酸の生成が減少する可能性があります。DHFR（Dihydrofolate Reductase）は、ジヒドロ葉酸還元酵素をコードしています。この酵素は、ジヒドロ葉酸をテトラヒドロ葉酸に還元する反応を触媒し、葉酸代謝において重要な役割を果たします。"
                }
            />

            <GeneInformationMiddle
                geneName={"FOLR1"}
                datas={[
                    "rs2071010"
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞への葉酸の輸送が不十分となる可能性があります。FOLR1（Folate Receptor 1）は、葉酸の取り込みに関与する葉酸受容体をコードしており、細胞が葉酸を効率よく吸収できるようにします。FOLR1は、特に胎盤や腎臓などで発現が高く、細胞内での葉酸の輸送と利用効率を高め、DNA合成や修復、メチル化に必要な一炭素単位の供給に寄与します。"
                }
            />
            
            <GeneInformationMiddle
                geneName={"FOLR2"}
                datas={["rs651933"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞への葉酸の輸送が不十分となる可能性があります。FOLR2（Folate Receptor 2）は、葉酸受容体タンパク質の一種をコードしており、細胞が葉酸を取り込むのを助ける役割を持っています。FOLR2は特に胎盤や白血球で発現が高く、葉酸の輸送と利用を効率化することで、DNAの合成や修復、メチル化サイクルに必要な葉酸の供給を支えます。"
                }
            />
            <GeneInformationMiddle
                geneName={"SLC19A1"}
                datas={["rs1051266"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞への葉酸の輸送が不十分となる可能性があります。SLC19A1（Solute Carrier Family 19 Member 1）は、葉酸やその誘導体を細胞に取り込むための輸送タンパク質をコードしており、葉酸を細胞内に効率的に輸送する役割を担います。このタンパク質は、葉酸が活性型テトラヒドロ葉酸に変換され、DNA合成やアミノ酸代謝、メチル化に使用されるための前段階で重要です。"
                }
            />

            <GenePageNumber>110</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene69;
