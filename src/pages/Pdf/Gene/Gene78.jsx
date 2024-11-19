import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene78 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"FN1"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"FN1"}
                datas={["rs1250229", "rs116558455", "rs140926439"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、組織の修復や細胞の移動、血管の形成などに影響を与える可能性があります。FN1（Fibronectin 1）は、細胞外マトリックスの主要構成要素であるフィブロネクチンをコードしており、細胞接着、成長、移動、組織の修復などにおいて中心的な役割を果たします。FN1は、細胞外マトリックスの形成とリモデリングに関わり、組織の再生や創傷治癒に寄与しています。"
                }
            />

            <GenePageNumber>119</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene78;
