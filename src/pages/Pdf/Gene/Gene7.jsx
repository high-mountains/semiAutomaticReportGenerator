import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene7 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"カテコラミン合成"} />

            <GeneInformationMiddle
                geneName={"DHFR"}
                datas={["rs121913223", "rs387906619"]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内のカテコラミン合成に必要な補因子の生成が低下する可能性があります。DHFR（Dihydrofolate Reductase）は、ジヒドロ葉酸還元酵素をコードしています。この酵素は、ジヒドロ葉酸をテトラヒドロ葉酸に還元する反応を触媒し、葉酸代謝において重要な役割を果たします。"}
            />
            <GeneInformationMiddle
                geneName={"GCH1"}
                datas={["rs104894433", "rs104894435", "rs104894436", "rs104894437", "rs104894438", "rs104894439", "rs104894440", "rs104894441", "rs104894442", "rs104894443", "rs104894444", "rs104894445", "rs137852633", "rs137852633", "rs886039379"]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内のカテコラミン合成に必要な補因子の生成が低下する可能性があります。GCH1（GTP Cyclohydrolase 1）は、GTPシクロヒドロラーゼ1という酵素をコードしており、ビオプテリンの合成に関与します。ビオプテリンは、ドーパミン、セロトニン、ノルアドレナリンなどの神経伝達物質を合成する際に必要な補酵素です。"}
            />
            
            <GeneInformationMiddle
                geneName={"TH"}
                datas={["rs80338892"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ドーパミンをはじめとするカテコラミンの合成が低下する可能性があります。TH（Tyrosine Hydroxylase）は、チロシン水酸化酵素をコードしており、チロシンからドーパを生成する反応を触媒します。"}
            />
            
            <GenePageNumber>48</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene7;
