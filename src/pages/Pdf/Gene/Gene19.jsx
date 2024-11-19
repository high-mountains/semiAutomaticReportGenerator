import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene19 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"COQ6"}
                datas={["rs397514479", "rs753489572"]}
                level={-1}
                description={"この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ6（Coenzyme Q6, Monooxygenase）は、コエンザイムQの生合成に必要な一連の酸化反応を担うモノオキシゲナーゼ酵素をコードしています。COQ6は、特に芳香族環の水酸化を触媒し、ユビキノン生成の途中段階に重要です。"}
            />
            <GeneInformationMiddle
                geneName={"COQ7"}
                datas={["rs864321686"]}
                level={-1}
                description={"この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ7（Coenzyme Q7, Hydroxylase）は、コエンザイムQの生合成経路で芳香族環の水酸化反応を行う酵素をコードしています。COQ7は、コエンザイムQの完全な構造の形成に不可欠で、ミトコンドリア機能の維持に重要です。"}
            />
            
            <GeneInformationMiddle
                geneName={"COQ8A"}
                datas={["rs863223884","rs863223887","rs387906299","rs387906298","rs119468005","rs119468008","rs748118737","rs755933881","rs201908721","rs199874519","rs578189699","rs119468004","rs771578775","rs119468009","rs119468006","rs886042265"]}
                level={-1}
                description={"この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ8A（Coenzyme Q8A, ATPase）およびCOQ8B（Coenzyme Q8B, ATPase）は、ATPase活性を持ち、コエンザイムQの生合成複合体の安定性や活性調整に関わるタンパク質をコードしています。これらのタンパク質は、コエンザイムQの生合成経路を支援する役割を果たします。"}
            />
            
            <GenePageNumber>60</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene19;
