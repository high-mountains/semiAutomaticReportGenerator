import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene8 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"カテコラミン代謝"} />

            <GeneInformationMiddle
                geneName={"COMT"}
                datas={["rs4680", "rs4633"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ドーパミンやノルアドレナリンの代謝が阻害される可能性があります。COMT（Catechol-O-Methyltransferase）は、カテコール-O-メチルトランスフェラーゼという酵素をコードしています。この酵素は、カテコール基を持つ神経伝達物質（ドーパミン、ノルアドレナリン、アドレナリンなど）の代謝に関与し、これらの神経伝達物質を不活性化するためにメチル基を付加する反応を触媒します。"}
            />
            <GeneInformationMiddle
                geneName={"MAOA"}
                datas={["rs6323", "rs1137070", "rs72554632", "rs796065312"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ドーパミンやセロトニン、ノルアドレナリンの代謝が阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。"}
            />
            
            <GeneInformationMiddle
                geneName={"MAOB"}
                datas={["rs1799836"]}
                level={-1}
                description={"この遺伝子に変異がある場合、グルタミン酸の代謝や体のエネルギー産生に問題が生じる可能性があります。GLUD1（Glutamate Dehydrogenase 1）は、グルタミン酸デヒドロゲナーゼ1という酵素をコードしています。この酵素は、グルタミン酸を酸化的に脱アミノ化し、α-ケトグルタル酸とアンモニアを生成します。"}
            />

            <GenePageNumber>49</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene8;
