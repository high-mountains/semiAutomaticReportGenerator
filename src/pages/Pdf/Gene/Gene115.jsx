import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene115 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"BMI"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"UCP2"}
                datas={["rs659366", "rs660339"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、エネルギー消費が減少しやすくなり、体重増加やBMIの上昇に影響を与える可能性があります。UCP2は、ミトコンドリア内膜に存在するタンパク質で、プロトンの流入を調整することでATP合成からのエネルギーを熱として放出します。このプロセスは、細胞の酸化ストレスを軽減し、エネルギー代謝や脂肪酸の酸化に影響を与えます。"
                }
            />

            <GenePageNumber>156</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene115;
