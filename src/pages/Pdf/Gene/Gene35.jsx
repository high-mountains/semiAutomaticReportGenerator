import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene35 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"ACAT2"}
                datas={[
                    "rs71565752",
                    "rs41258114",
                    "rs9347340",
                    "rs3798211",
                    "rs75757546",
                    "rs3465",
                    "rs25683",
                    "rs146437481",
                    "rs202015012",
                    "rs192445956",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、脂肪酸やコレステロールの代謝が阻害される可能性があります。ACAT2（Acetyl-CoA Acetyltransferase 2）は、アセチル-CoAアセチルトランスフェラーゼ2をコードしており、主に肝臓でコレステロールエステルの合成に関与しています。この酵素は、アセチル-CoAと脂肪酸を基質にしてコレステロールエステルを生成し、コレステロールの輸送や貯蔵において重要な役割を果たします。"
                }
            />
            <GeneInformationMiddle
                geneName={"ADRA2A"}
                datas={["rs553668"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、食欲やエネルギー代謝の制御に影響を与える可能性があります。ADRA2A（Adrenoceptor Alpha 2A）は、アドレナリンα2A受容体をコードしています。この受容体は、ノルアドレナリンとアドレナリンの結合によって活性化され、中枢神経系や交感神経系で神経伝達の調節に重要な役割を果たします。"
                }
            />
            <GeneInformationMiddle
                geneName={"BCMO1"}
                datas={["rs7501331", "rs12934922", "rs11645428"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内でのβ-カロテンからビタミンAへの変換が低下する可能性があります。BCMO1（Beta-Carotene Monooxygenase 1）は、β-カロテン-15,15'-モノオキシゲナーゼという酵素をコードしており、β-カロテンをビタミンA（レチナール）に変換する役割を担います。"
                }
            />

            <GenePageNumber>76</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene35;
