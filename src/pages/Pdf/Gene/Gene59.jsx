import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene59 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"SOD2"}
                datas={["rs4880"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD2（Superoxide Dismutase 2）は、スーパーオキシドジスムターゼ2をコードしており、ミトコンドリア内で活性酸素種の一つであるスーパーオキシドラジカルを過酸化水素に変換する役割を持っています。"
                }
            />
            <GeneInformationMiddle
                geneName={"SOD3"}
                datas={["rs2855262", "rs1799895"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD3（Superoxide Dismutase 3）は、細胞外で働く抗酸化酵素で、スーパーオキシドラジカルを過酸化水素に変換して酸化ストレスを軽減します。SOD3は血管、肺、皮膚などで高く発現し、外部環境からの酸化ダメージから組織を保護する役割を果たしています。"
                }
            />

            <GenePageNumber>100</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene59;
