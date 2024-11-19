import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene68 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"SHMT2"}
                datas={[
                    "rs34095989"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SHMT2（Serine Hydroxymethyltransferase 2）は、ミトコンドリアで働くセリンヒドロキシメチルトランスフェラーゼ酵素をコードしており、SHMT1と同様にセリンからグリシンを生成し、5,10-メチレンテトラヒドロ葉酸を供給します。SHMT2は、ミトコンドリア内の代謝プロセスやエネルギー生産に関与し、特に細胞分裂や増殖のために重要です。"}
            />
            <GeneInformationMiddle
                geneName={"SLC40A1"}
                datas={[
                    "rs11568350", "rs11568351", "rs104893664"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内での鉄代謝のバランスが崩れ、酸化ストレスが増加する可能性があります。SLC40A1（Solute Carrier Family 40 Member 1）は、フェロポーチンとして知られるタンパク質をコードしており、細胞内の鉄を細胞外に輸送する役割を担います。SLC40A1は特に腸管上皮細胞やマクロファージで発現が高く、体内の鉄の取り込み、貯蔵、利用を調整します。"}
            />
            <GeneInformationMiddle
                geneName={"SOD2"}
                datas={[
                    "rs5746136", "rs4880"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD2（Superoxide Dismutase 2）は、スーパーオキシドジスムターゼ2をコードしており、ミトコンドリア内で活性酸素種の一つであるスーパーオキシドラジカルを過酸化水素に変換する役割を持っています。"}
            />
            <GeneInformationMiddle
                geneName={"SOD3"}
                datas={[
                    "rs2855262", "rs1799895"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD3（Superoxide Dismutase 3）は、細胞外で働く抗酸化酵素で、スーパーオキシドラジカルを過酸化水素に変換して酸化ストレスを軽減します。SOD3は血管、肺、皮膚などで高く発現し、外部環境からの酸化ダメージから組織を保護する役割を果たしています。"}
            />

            <GenePageNumber>109</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene68;
