import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene56 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"NOS3"}
                datas={["rs2070744"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。NOS3（Nitric Oxide Synthase 3）は、一酸化窒素合成酵素（eNOS）をコードしており、血管内皮細胞で一酸化窒素（NO）を生成する役割を担います。この酵素は、血管の拡張、血流の調整、血圧の維持に関与しており、特に血管の健康維持において重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"SOD2"}
                datas={["rs5746136", "rs4880"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD2（Superoxide Dismutase 2）は、スーパーオキシドジスムターゼ2をコードしており、ミトコンドリア内で活性酸素種の一つであるスーパーオキシドラジカルを過酸化水素に変換する役割を持っています。"
                }
            />

            <GenePageNumber>97</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene56;
