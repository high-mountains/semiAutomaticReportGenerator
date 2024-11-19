import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene77 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"Dyslexia"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"DCDC2"}
                datas={["rs793862", "rs807701"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、脳の発達に関与する神経細胞の移動や配置に影響を及ぼす可能性があります。DCDC2（Doublecortin Domain Containing 2）は、神経発達に関与するタンパク質をコードしており、特に脳内で神経細胞の移動や配列に関わっています。DCDC2は、読字や言語処理能力と関連があるとされ、遺伝的変異が言語や読字能力に影響を及ぼす可能性が指摘されています。"
                }
            />

            <GeneInformationMiddle
                geneName={"KIAA0319"}
                datas={[
                    "rs4504469"
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、言語処理に関わる脳の構造と機能に影響を及ぼす可能性があります。KIAA0319は、脳の発達において神経細胞の移動やシナプスの形成に関与するタンパク質をコードしています。この遺伝子は、特に読字や言語処理のスキルに関連があるとされ、神経回路の構築に重要な役割を持っています。"
                }
            />
            
            <GenePageNumber>118</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene77;
