import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene79 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"Leaky"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"IL10"}
                datas={["rs1800871", "rs1800896", "rs3024505"]}
                level={0}
                description={
                    "この遺伝子に変異がある場合、免疫系が過剰に反応しやすくなり、腸内バリアの透過性が増加する可能性があります。IL10（Interleukin 10）は、抗炎症性のサイトカインで、免疫応答の調節に重要な役割を果たします。この分子は、マクロファージやT細胞などの免疫細胞から分泌され、炎症性サイトカインの産生を抑制することで免疫系の過剰な活性化を防ぎます。"
                }
            />
            <GeneInformationMiddle
                geneName={"ZO-2(TJP2)"}
                datas={["rs121918299", "rs587777521", "rs746830415"]}
                level={0}
                description={
                    "この遺伝子に変異がある場合、免疫系が過剰に反応しやすくなり、腸内バリアの透過性が増加する可能性があります。IL10（Interleukin 10）は、抗炎症性のサイトカインで、免疫応答の調節に重要な役割を果たします。この分子は、マクロファージやT細胞などの免疫細胞から分泌され、炎症性サイトカインの産生を抑制することで免疫系の過剰な活性化を防ぎます。"
                }
            />

            <GenePageNumber>115</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene79;
