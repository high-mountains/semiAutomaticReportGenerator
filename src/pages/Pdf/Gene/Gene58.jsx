import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene58 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"G6PD"}
                datas={[
                    "rs782322505",
                    "rs137852315",
                    "rs137852318",
                    "rs137852319",
                    "rs137852321",
                    "rs137852323",
                    "rs137852324",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ミトコンドリア内での抗酸化防御機構が弱まる可能性があります。G6PD（Glucose-6-Phosphate Dehydrogenase）は、グルコース-6-リン酸デヒドロゲナーゼという酵素をコードしています。この酵素は、ペントースリン酸経路における重要な酵素で、グルコース-6-リン酸を酸化し、NADPHを生成します。"
                }
            />
            <GeneInformationMiddle
                geneName={"GCLC"}
                datas={["rs1002149", "rs3779647"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、グルタチオンの合成が阻害され、酸化ストレスに対する防御機能が弱まる可能性があります。GCLC（Glutamate-Cysteine Ligase Catalytic Subunit）は、グルタミン酸システインリガーゼの触媒サブユニットをコードしています。この酵素は、グルタチオン合成の初期段階でグルタミン酸とシステインを結合する反応を触媒し、抗酸化物質であるグルタチオンの生成において重要な役割を果たします。"
                }
            />
            <GeneInformationMiddle
                geneName={"GCLM"}
                datas={["rs41303970"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、グルタチオンの合成が阻害され、酸化ストレスに対する防御機能が弱まる可能性があります。GCLM（Glutamate-Cysteine Ligase Modifier Subunit）は、グルタミン酸システインリガーゼの修飾サブユニットをコードしており、GCLCとともにグルタチオン合成を促進します。GCLMは、GCLCの触媒活性を調節し、グルタチオンの生成を効率的に行うために必要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"GSR"}
                datas={["rs1002149", "rs3779647"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、酸化型グルタチオンの還元が不十分となり、酸化ストレスに対する防御機能が弱まる可能性があります。GSR（Glutathione Reductase）は、グルタチオン還元酵素をコードしており、酸化型グルタチオン（GSSG）を還元型グルタチオン（GSH）に再生する役割を持っています。この酵素は、NADPHを利用してグルタチオンの還元を行い、細胞の抗酸化防御を維持します。"
                }
            />

            <GenePageNumber>99</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene58;
