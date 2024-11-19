import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene3 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"ヒスタミン代謝"} />

            <GeneInformationMiddle
                geneName={"ALDH2"}
                datas={["rs671"]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内でのヒスタミンの分解が不十分となり、アレルギー反応に影響を与える可能性があります。ALDH2（Aldehyde Dehydrogenase 2）は、アルデヒドデヒドロゲナーゼ2という酵素をコードしています。この酵素は、主に肝臓で活性を持ち、エタノール代謝においてアセトアルデヒドを酢酸に変換する役割を果たします。ALDH2は、アセトアルデヒドの解毒に重要で、これによりアルコール摂取後の身体反応に影響を与えます"}
            />
            <GeneInformationMiddle
                geneName={"MAOA"}
                datas={["rs6323", "rs1137070", "rs72554632", "rs796065312"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ヒスタミンを代謝するプロセスが阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。"}
            />
            
            <GeneInformationMiddle
                geneName={"MAOB"}
                datas={["rs179983"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ヒスタミンを代謝するプロセスが阻害される可能性があります。MAOB（Monoamine Oxidase B）は、モノアミンオキシダーゼBという酵素をコードしています。この酵素は、ドーパミンやフェネチルアミンなどのモノアミン神経伝達物質を分解する役割を持ち、神経伝達物質の濃度を調節します。"}
            />
            
            <GeneInformationMiddle
                geneName={"ABP1"}
                datas={["rs2052129", "rs1049793", "rs1049742", "rs10156191"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ヒスタミンを代謝するプロセスが阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。"}
            />

            <GenePageNumber>53</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene3;
