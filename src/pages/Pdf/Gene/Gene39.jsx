import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene39 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"UGT1A1"}
                datas={["rs887829", "rs34983651", "rs6742078", "rs34946978"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、BPAの代謝と排泄が不十分となる可能性があります。UGT1A1（UDP Glucuronosyltransferase Family 1 Member A1）は、グルクロン酸転移酵素をコードしています。この酵素は、ビリルビンやホルモン、特定の薬物などにグルクロン酸を結合させ、水溶性を高めて排泄しやすくする役割を持っています。"
                }
            />

            <GeneInformationMiddle
                geneName={"UGT2B15"}
                datas={["rs1902023"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、BPAの代謝と排泄が不十分となる可能性があります。UGT2B15（UDP Glucuronosyltransferase Family 2 Member B15）は、グルクロン酸転移酵素の一種で、ステロイドホルモンや脂質、薬物などの代謝に関与します。この酵素もグルクロン酸を結合させて、代謝物の水溶性を高め、体外への排出を促進します。"
                }
            />

            <GeneInformationMiddle
                geneName={"COX2"}
                datas={["rs1131341", "rs1800566"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、酸化ストレスや関連する細胞損傷のリスクが高まる可能性があります。NQO1（NAD(P)H Quinone Dehydrogenase 1）は、キノンデヒドロゲナーゼという酵素をコードしています。この酵素は、キノン類を還元して無毒化し、細胞の酸化ストレスを軽減する役割を果たします。"
                }
            />

            <GenePageNumber>80</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene39;
