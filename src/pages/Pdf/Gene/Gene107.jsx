import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "SPR",
    datas: [
      "rs104893665", "rs104893666", "rs121917746", "rs121917747", "rs387907200", 
      "rs398122922", "rs587776777"
    ],
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
  {
    geneName: "TPH",
    datas: ["rs1799913"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、セロトニンの産生が低下する可能性があります。TPHは、トリプトファンヒドロキシラーゼという酵素をコードしており、トリプトファンを5-ヒドロキシトリプトファンに変換することでセロトニン合成の第一段階を担います。この酵素は、神経伝達物質であるセロトニンの生成において中心的な役割を果たし、気分、睡眠、食欲の調整に関与します。",
  },
  {
    geneName: "TPH2",
    datas: ["rs4570625", "rs1843809"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、セロトニンの産生が低下する可能性があります。TPH2は、脳内の神経細胞で特異的に発現するトリプトファンヒドロキシラーゼで、セロトニンの生成を直接調整します。TPH2は、セロトニンの合成量に影響を与え、気分やストレス応答の調整に重要な役割を果たしています。TPHと異なり、TPH2は中枢神経系でのセロトニン合成に特化しています。",
  },
];

const Gene107 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+146}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene107;
