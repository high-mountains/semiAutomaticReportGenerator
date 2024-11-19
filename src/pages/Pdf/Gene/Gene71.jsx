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
                textContent={"APOE"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"APOE"}
                datas={["rs429358", "rs7412"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内の脂質代謝やコレステロール輸送に影響を与える可能性があります。APOE（Apolipoprotein E）は、脂質の運搬と代謝に関わるアポリポタンパク質Eをコードしており、コレステロールやトリグリセリドなどの脂質を細胞間で輸送する役割を果たします。APOEは特に肝臓と脳で重要な役割を持ち、神経細胞の維持や修復にも関与しています。"
                }
            />

            <GenePageNumber>112</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene65;
