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
                    "rs41258114",
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
                geneName={"BCMO1"}
                datas={["rs7501331", "rs12934922", "rs11645428"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内でのβ-カロテンからビタミンAへの変換が低下する可能性があります。BCMO1（Beta-Carotene Monooxygenase 1）は、β-カロテン-15,15'-モノオキシゲナーゼという酵素をコードしており、β-カロテンをビタミンA（レチナール）に変換する役割を担います。"
                }
            />

            <GeneInformationMiddle
                geneName={"ELOVL2"}
                datas={["rs953413"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、長鎖不飽和脂肪酸の合成が阻害される可能性があります。ELOVL2（Elongation of Very Long Chain Fatty Acids Protein 2）は、非常に長鎖の脂肪酸を延長する酵素をコードしています。この酵素は、脂肪酸合成経路において、特に長鎖ポリ不飽和脂肪酸（PUFA）の生成に関与し、細胞膜の構造や機能、シグナル伝達に重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"SELENOS"}
                datas={["rs28665122", "rs28665122"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化作用を持つセレンタンパク質の機能が低下する可能性があります。SELENOS（Selenoprotein S）は、セレノプロテインSをコードしており、細胞内の小胞体に存在して、タンパク質の品質管理とストレス応答に関与します。SELENOSは、異常なタンパク質の分解をサポートし、炎症反応の調節にも寄与しています。"
                }
            />
            <GenePageNumber>74</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene35;
