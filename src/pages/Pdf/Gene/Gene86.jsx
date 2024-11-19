import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene86 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"オートファジー"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"ATG16L1"}
                datas={["rs2241880"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞の不要な成分や損傷を除去する過程が不十分となる可能性があります。ATG16L1は、オートファジー過程に関与するタンパク質をコードしています。このタンパク質は、オートファジーの初期段階でATG12-ATG5複合体と結合し、オートファゴソームの膜形成に重要な役割を果たします。ATG16L1は、細胞内で不要なタンパク質や損傷した細胞小器官の除去を通じて、細胞の恒常性維持やストレス応答に寄与しています。"
                }
            />
            <GeneInformationMiddle
                geneName={"ATG5"}
                datas={["rs1131692265"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞の不要な成分や損傷を除去する過程が不十分となる可能性があります。ATG5は、オートファジー関連タンパク質で、オートファゴソーム形成のために不可欠な役割を担っています。ATG5は、ATG12と共にATG12-ATG5複合体を形成し、この複合体はオートファゴソーム膜の伸長と閉鎖を促進します。ATG5は、細胞の不要な物質やダメージを受けた構造物の除去、特にエネルギーが不足した際に再利用するための仕組みにおいて重要です。"
                }
            />

            <GenePageNumber>127</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene86;
