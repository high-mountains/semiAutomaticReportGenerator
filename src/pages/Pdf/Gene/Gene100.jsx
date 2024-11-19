import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene100 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"筋肉/筋肉痛"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"ACTN3"}
                datas={["rs1815739"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、速筋線維の収縮力やパフォーマンスに影響を与える可能性があります。ACTN3は、α-アクチニン3というタンパク質をコードしており、筋肉の速筋繊維で発現します。このタンパク質は、筋収縮や瞬発力に関わり、特にスプリントやパワー系の運動において重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"AMPD1"}
                datas={["rs17602729"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、運動時のエネルギー供給が不十分となる可能性があります。AMPD1は、アデノシン一リン酸デアミナーゼ1という酵素をコードしており、筋肉でAMP（アデノシン一リン酸）を分解してイノシン一リン酸（IMP）に変換する役割を果たします。この酵素は、筋肉のエネルギー代謝と疲労耐性に影響を与え、特に運動や筋収縮時のエネルギー効率を調整します。"
                }
            />

            <GenePageNumber>141</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene100;
