import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene66 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"DUOX1"}
                datas={[
                    "rs1648305",
"rs141154319",
"rs751561010",
"rs369560581",
"rs748291379"

                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。DUOX1（Dual Oxidase 1）は、過酸化水素を生成する酵素をコードしており、特に気道や腸の上皮細胞で発現が高く、免疫応答や抗菌防御に関与します。DUOX1は、外部からの病原体に対する酸化的防御を提供し、組織の健康維持と免疫系の調節に重要な役割を果たしています。"}
            />
            <GeneInformationMiddle
                geneName={"GCLC"}
                datas={[
                    "rs17883901", "rs761142"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、グルタチオンの合成が阻害され、酸化ストレスに対する防御機能が弱まる可能性があります。GCLC（Glutamate-Cysteine Ligase Catalytic Subunit）は、グルタミン酸システインリガーゼの触媒サブユニットをコードしています。この酵素は、グルタチオン合成の初期段階でグルタミン酸とシステインを結合する反応を触媒し、抗酸化物質であるグルタチオンの生成において重要な役割を果たします。"}
            />
            <GeneInformationMiddle
                geneName={"GCLM"}
                datas={[
                    "rs41303970"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、グルタチオンの合成が阻害され、酸化ストレスに対する防御機能が弱まる可能性があります。GCLM（Glutamate-Cysteine Ligase Modifier Subunit）は、グルタミン酸システインリガーゼの修飾サブユニットをコードしており、GCLCとともにグルタチオン合成を促進します。GCLMは、GCLCの触媒活性を調節し、グルタチオンの生成を効率的に行うために必要です。"}
            />
            <GeneInformationMiddle
                geneName={"HFE"}
                datas={[
                    "rs1800562", "rs1799945"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内での鉄代謝のバランスが崩れ、酸化ストレスが増加する可能性があります。HFE（Homeostatic Iron Regulator）は、鉄の取り込みと貯蔵の調整に関与するタンパク質をコードしています。このタンパク質は、トランスフェリン受容体と相互作用し、細胞への鉄の取り込みを調節することで、体内の鉄のバランスを維持します。"}
            />

            <GenePageNumber>107</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene66;
