import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene64 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"MTHFR A1298C"}
                datas={[
                    "rs1801131"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、細胞のメチル化反応が影響を受ける可能性があります。MTHFR A1298C（Methylenetetrahydrofolate Reductase, A1298C多型）は、MTHFR遺伝子におけるアラニン（A）からシステイン（C）への置換を示す多型で、この変異によりMTHFR酵素の活性が低下することがあります。MTHFRは、5,10-メチレンテトラヒドロ葉酸を5-メチルテトラヒドロ葉酸に変換する酵素であり、ホモシステインのメチル化を通じてメチオニンに変換する役割を担っています。"}
            />
            <GeneInformationMiddle
                geneName={"MTHFR C677T"}
                datas={[
                    "rs1801133"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、細胞のメチル化反応が影響を受ける可能性があります。MTHFR C677T（Methylenetetrahydrofolate Reductase, C677T多型）は、MTHFR遺伝子におけるシトシン（C）からチミン（T）への置換を示す多型で、この変異によりMTHFR酵素の活性が低下することがあります。C677T多型は、ホモシステインからメチオニンへの変換に影響を及ぼし、メチル供給が不足する可能性があります。"}
            />
            <GeneInformationMiddle
                geneName={"MTR"}
                datas={[
                    "rs1805087"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、細胞のメチル化反応が影響を受ける可能性があります。MTR（Methionine Synthase）は、メチオニンシンターゼという酵素をコードしており、ホモシステインをメチオニンに再メチル化する役割を果たします。この反応では、5-メチルテトラヒドロ葉酸がメチル基供与体として働き、DNA合成や修復、メチル化反応に必要なメチル基を提供します。"}
            />
            <GeneInformationMiddle
                geneName={"MTRR"}
                datas={[
                    "rs1801394"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、細胞のメチル化反応が影響を受ける可能性があります。MTRR（Methionine Synthase Reductase）は、メチオニンシンターゼの活性を維持するための補助酵素で、MTRが反応を繰り返し行えるように再活性化する役割を持っています。MTRRは、ビタミンB12を必要とする反応を介してMTRの活性状態を維持し、ホモシステインの再メチル化とメチル供給において重要です。"}
            />

            <GenePageNumber>105</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene64;
