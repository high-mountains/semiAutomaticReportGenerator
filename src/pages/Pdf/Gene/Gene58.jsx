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
                level={0}
                description={
                    "この遺伝子に変異がある場合、ミトコンドリア内での抗酸化防御機構が弱まる可能性があります。G6PD（Glucose-6-Phosphate Dehydrogenase）は、グルコース-6-リン酸デヒドロゲナーゼという酵素をコードしています。この酵素は、ペントースリン酸経路における重要な酵素で、グルコース-6-リン酸を酸化し、NADPHを生成します。"
                }
            />
            <GeneInformationMiddle
                geneName={"GSR"}
                datas={["rs3779647"]}
                level={0}
                description={
                    "この遺伝子に変異がある場合、グルタチオンの合成が阻害され、酸化ストレスに対する防御機能が弱まる可能性があります。GCLC（Glutamate-Cysteine Ligase Catalytic Subunit）は、グルタミン酸システインリガーゼの触媒サブユニットをコードしています。この酵素は、グルタチオン合成の初期段階でグルタミン酸とシステインを結合する反応を触媒し、抗酸化物質であるグルタチオンの生成において重要な役割を果たします。"
                }
            />
            <GeneInformationMiddle
                geneName={"SOD1"}
                datas={["rs121912442", "rs121912443", "rs121912441", "rs121912445", "rs4998557"]}
                level={0}
                description={
                    "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD1（Superoxide Dismutase 1）は、スーパーオキシドラジカルを過酸化水素に変換する抗酸化酵素で、主に細胞質で働きます。SOD1は、活性酸素種の除去を通じて酸化ストレスから細胞を保護し、細胞の健康維持において重要な役割を果たしています。"
                }
            />

            <GenePageNumber>94</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene58;
