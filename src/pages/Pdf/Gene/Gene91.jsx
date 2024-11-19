import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene91 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"メラトニン"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"MTNR1A"}
                datas={["rs12506228"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内時計や睡眠調節が影響を受ける可能性があります。MTNR1Aは、メラトニン受容体1Aというタンパク質をコードしており、脳の松果体で分泌されるホルモン、メラトニンに結合することで睡眠覚醒サイクルを調節します。MTNR1Aは、特に視交叉上核で発現し、昼夜のリズムや季節性の行動調整にも影響を与えます。"
                }
            />

            <GenePageNumber>132</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene91;
