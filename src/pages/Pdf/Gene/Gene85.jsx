import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene85 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"アルコール"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"ADH1B"}
                datas={["rs1229984", "rs2066702"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、アルコールの代謝が影響を受ける可能性があります。ADH1B（Alcohol Dehydrogenase 1B）は、アルコールデヒドロゲナーゼ1Bという酵素をコードしています。この酵素は、エタノールをアセトアルデヒドに酸化する反応を触媒し、アルコール代謝の初期段階で活性を持ちます。"
                }
            />
            
            <GeneInformationMiddle
                geneName={"ALDH2"}
                datas={["rs671"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、アルコールの代謝が影響を受ける可能性があります。ALDH2（Aldehyde Dehydrogenase 2）は、アルデヒドデヒドロゲナーゼ2という酵素をコードしています。この酵素は、主に肝臓で活性を持ち、エタノール代謝においてアセトアルデヒドを酢酸に変換する役割を果たします。ALDH2は、アセトアルデヒドの解毒に重要で、これによりアルコール摂取後の身体反応に影響を与えます。"
                }
            />

            <GenePageNumber>118</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene85;
