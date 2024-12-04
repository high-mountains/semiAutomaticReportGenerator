import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "MAOB",
    datas: ["rs1799836"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、主にドーパミンの代謝が阻害される可能性があります。MAOB（Monoamine Oxidase B）は、モノアミンオキシダーゼBという酵素をコードしています。この酵素は、ドーパミンやフェネチルアミンなどのモノアミン神経伝達物質を分解する役割を持ち、神経伝達物質の濃度を調節します。",
  },
  {
    geneName: "SLC6A4",
    datas: ["rs1042173"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、セロトニン再取り込みが不十分となる可能性があります。SLC6A4は、セロトニントランスポーター（SERT）をコードしており、シナプス間隙からセロトニンを再取り込みすることで神経伝達を調整します。このトランスポーターは、神経細胞にセロトニンを再吸収することでセロトニンの作用を終了させ、気分、感情、睡眠、食欲の調整に関与しています。",
  },
  {
    geneName: "SPR",
    datas: ["rs104893665", "rs104893666", "rs121917746", "rs121917747", "rs387907200", "rs398122922", "rs587776777"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ドーパミンやセロトニンなどの神経伝達物質の産生が低下する可能性があります。SPRは、セピアプテリンレダクターゼという酵素をコードしており、テトラヒドロビオプテリン（BH4）を生成する経路で重要な役割を果たします。BH4は、ドーパミン、セロトニン、ノルアドレナリンなどの神経伝達物質の合成に必須の補酵素であり、SPRはこれらの神経伝達物質の適切な供給を支える役割を担っています。",
  },
  {
    geneName: "TH",
    datas: ["rs80338892"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ドーパミンをはじめとするカテコラミンの合成が低下する可能性があります。TH（Tyrosine Hydroxylase）は、チロシン水酸化酵素をコードしており、チロシンからドーパを生成する反応を触媒します。ドーパは、ドーパミン、ノルアドレナリン、アドレナリンの前駆体であり、これらの神経伝達物質は、運動や感情、ストレス応答などの調節に関与しています。",
  },
];

const Gene106 = () => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      {/* Render each gene information dynamically */}
      {updatedGeneData.map((item, index) => (
        <GeneInformationMiddle
          key={index}
          geneName={item.geneName}
          datas={item.datas}
          level={item.level}
          description={item.description}
        />
      ))}

      <GenePageNumber>136</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene106;
