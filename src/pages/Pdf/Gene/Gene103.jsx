import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene103 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"神経伝達物質"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"COMT"}
                datas={["rs4680", "rs4633"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ドーパミンやノルアドレナリンの代謝が阻害される可能性があります。COMT（Catechol-O-Methyltransferase）は、カテコール-O-メチルトランスフェラーゼという酵素をコードしています。この酵素は、カテコール基を持つ神経伝達物質（ドーパミン、ノルアドレナリン、アドレナリンなど）の代謝に関与し、これらの神経伝達物質を不活性化するためにメチル基を付加する反応を触媒します。"
                }
            />
            <GeneInformationMiddle
                geneName={"DAO"}
                datas={["rs3741775", "rs2070586", "rs2111902"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、グルタミン酸の分解が正しく行われず、体内でグルタミン酸がたまりやすくなる可能性があります。DAO（D-amino Acid Oxidase）は、D-アミノ酸オキシダーゼという酵素をコードしています。この酵素は、D-型アミノ酸、特にD-セリンやD-グルタミン酸などを分解する役割を持ち、神経伝達物質の調節に関与します。"
                }
            />
            <GeneInformationMiddle
                geneName={"DAOA"}
                datas={["rs2391191"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、グルタミン酸の分解が正しく行われず、体内でグルタミン酸がたまりやすくなる可能性があります。DAOA（D-amino acid oxidase activator）は、D-アミノ酸オキシダーゼ（DAO）を活性化するタンパク質をコードしています。DAOは、D-アミノ酸を酸化する酵素であり、特に神経系において重要な役割を果たします。DAOAは、DAOの活性を調節し、D-セリンなどの神経伝達調節因子の代謝に関与しています。"
                }
            />
            <GeneInformationMiddle
                geneName={"DHFR"}
                datas={["rs121913223", "rs387906619"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内のカテコラミン合成に必要な補因子の生成が低下する可能性があります。DHFR（Dihydrofolate Reductase）は、ジヒドロ葉酸還元酵素をコードしています。この酵素は、ジヒドロ葉酸をテトラヒドロ葉酸に還元する反応を触媒し、葉酸代謝において重要な役割を果たします。"
                }
            />

            <GenePageNumber>144</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene103;
