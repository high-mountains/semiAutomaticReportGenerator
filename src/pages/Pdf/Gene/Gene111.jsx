import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene111 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"NOS2"}
                datas={["rs4795067"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腸内の免疫応答に影響を及ぼす可能性があります。NOS2は、誘導型一酸化窒素合成酵素（iNOS）をコードしており、主にマクロファージなどの免疫細胞で発現します。この酵素は、L-アルギニンから一酸化窒素（NO）を生成し、感染や炎症の際に抗菌作用や細胞傷害作用を発揮します。"
                }
            />
            <GeneInformationMiddle
                geneName={"NOS3"}
                datas={["rs2070744"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腸内の免疫応答に影響を及ぼす可能性があります。NOS3（Nitric Oxide Synthase 3）は、一酸化窒素合成酵素（eNOS）をコードしており、血管内皮細胞で一酸化窒素（NO）を生成する役割を担います。この酵素は、血管の拡張、血流の調整、血圧の維持に関与しており、特に血管の健康維持において重要です。"
                }
            />

            <GenePageNumber>152</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene111;
