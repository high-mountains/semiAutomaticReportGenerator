import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene65 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"酸化/抗酸化"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"CAT"}
                datas={["rs769217", "rs1001179", "rs7943316"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、過酸化水素の分解が不十分となり、酸化ストレスに対する体内の防御が弱まる可能性があります。CAT（Catalase）は、カタラーゼという抗酸化酵素をコードしています。この酵素は、細胞内で過酸化水素を水と酸素に分解する反応を触媒し、酸化ストレスから細胞を保護する役割を果たします。"
                }
            />

            <GeneInformationMiddle
                geneName={"CBS"}
                datas={[
                    "rs121964962",
                    "rs121964963",
                    "rs121964965",
                    "rs121964967",
                    "rs121964972",
                    "rs375846341",
                    "rs398123151",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ホモシステインの代謝が影響を受け、酸化ストレスが増加する可能性があります。CBS（Cystathionine Beta-Synthase）は、シスタチオニンβ-シンターゼという酵素をコードしています。この酵素は、メチオニン代謝経路において重要な役割を果たし、ホモシステインをシスタチオニンに変換する反応を触媒します。具体的には、CBSはホモシステインとセリンを基質としてシスタチオニンを生成し、これによりホモシステインの濃度を調節し、メチオニン代謝の中間生成物を産生します。"
                }
            />
            
            <GeneInformationMiddle
                geneName={"CTH"}
                datas={["rs1021737", "rs28941786"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、グルタチオンの合成が影響を受け、体内の酸化ストレスが増加する可能性があります。CTH（Cystathionine Gamma-Lyase）は、シスタチオニンγ-リアーゼという酵素をコードする遺伝子です。この酵素は、シスタチオニンをシステイン、アンモニア、そしてα-ケト酪酸に変換する反応を触媒します。CTHは、メチオニン代謝経路の後半に位置し、硫黄代謝やシステインの供給に重要です。システインは、グルタチオン合成における必須成分であり、抗酸化防御機構や細胞の解毒機能、酸化ストレスへの応答に寄与します。"
                }
            />

            <GenePageNumber>106</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene65;
