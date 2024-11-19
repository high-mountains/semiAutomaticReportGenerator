import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene17 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"ミトコンドリア"} />

            <GeneInformationMiddle
                geneName={"ACAT2"}
                datas={["rs71565752", "rs41258114", "rs9347340", "rs3798211", "rs75757546", "rs3465", "rs25683", "rs146437481", "rs202015012", "rs192445956"]}
                level={-1}
                description={"この遺伝子に変異がある場合、脂肪酸やコレステロールの代謝が阻害される可能性があります。ACAT2（Acetyl-CoA Acetyltransferase 2）は、アセチル-CoAアセチルトランスフェラーゼ2をコードしており、主に肝臓でコレステロールエステルの合成に関与しています。この酵素は、アセチル-CoAと脂肪酸を基質にしてコレステロールエステルを生成し、コレステロールの輸送や貯蔵において重要な役割を果たします。"}
            />
            
            <GeneInformationMiddle
                geneName={"ATP5F1A"}
                datas={["rs587776960", "rs587777788"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。ATP5F1A（ATP Synthase F1 Subunit Alpha）は、ATP合成酵素のF1部分のαサブユニットをコードしています。ATP合成酵素はミトコンドリア内膜に存在し、プロトン濃度勾配を利用してATPを生成する複合体です。αサブユニットは、ATP生成に直接関与する部位を構成し、エネルギーの産生において重要な役割を果たします。"}
            />

            <GeneInformationMiddle
                geneName={"ATP5F1E"}
                datas={["rs387906929"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。ATP5F1E（ATP Synthase F1 Subunit Epsilon）は、ATP合成酵素のF1部分のεサブユニットをコードしています。このサブユニットは、ATP合成酵素の構造的安定性に寄与し、ATP生成の効率を維持するために必要です。"}
            />

            <GenePageNumber>58</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene17;
