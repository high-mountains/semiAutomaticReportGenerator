import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene110 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"HLA-DQA1"}
                datas={["rs9271588"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腸内の免疫応答に影響を及ぼす可能性があります。HLA-DQA1は、HLAクラスII分子のα鎖をコードする遺伝子です。このα鎖は、β鎖と対になることでHLA-DQ分子を形成し、外来抗原や自己抗原をT細胞に提示します。HLA-DQA1の異なるアレルは、抗原提示の効率や特異性に影響を与え、免疫応答の強さや方向性に寄与します。"
                }
            />
            <GeneInformationMiddle
                geneName={"HLA-DQA2"}
                datas={["rs2858331", "rs9275596"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腸内の免疫応答に影響を及ぼす可能性があります。HLA-DQA2は、HLAクラスII分子のα鎖をコードする遺伝子ですが、HLA-DQA1とは異なるアレルおよび遺伝的多様性を持ち、DQB1と組み合わせて抗原提示機能を担います。HLA-DQA2は、病原体や自己抗原に対する免疫応答に関与し、特定の免疫反応や自己免疫傾向に影響を与えることが知られています。"
                }
            />
            <GeneInformationMiddle
                geneName={"HLA-DRA"}
                datas={["rs7192"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腸内の免疫応答に影響を及ぼす可能性があります。HLA-DRAは、HLAクラスII分子のα鎖をコードし、主にDRB遺伝子でコードされるβ鎖と結合してHLA-DR分子を形成します。この分子は、抗原提示細胞上で外来抗原をT細胞に提示し、特に感染時の免疫応答を促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"MCM6"}
                datas={["rs4988235", "rs182549"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、乳糖の消化能力が低下する可能性があります。MCM6は、ミニクロモソームメンテナンス複合体の一部で、DNA複製の開始と進行において重要な役割を果たすタンパク質をコードしています。この複合体は、DNAの解離を助け、複製フォークの進行を支援することで細胞周期を制御します。また、MCM6の遺伝子領域には、乳糖不耐性や乳糖消化能力に関連する調節領域が含まれ、遺伝的に乳糖耐性をもたらす多型も存在します。"
                }
            />

            <GenePageNumber>151</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene110;
