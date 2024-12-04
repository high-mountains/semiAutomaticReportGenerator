import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "DUOX1",
    datas: ["rs141154319", "rs751561010", "rs369560581", "rs748291379"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。DUOX1（Dual Oxidase 1）は、過酸化水素を生成する酵素をコードしており、特に気道や腸の上皮細胞で発現が高く、免疫応答や抗菌防御に関与します。DUOX1は、外部からの病原体に対する酸化的防御を提供し、組織の健康維持と免疫系の調節に重要な役割を果たしています。",
  },
  {
    geneName: "HFE",
    datas: ["rs1800562", "rs1799945"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内での鉄代謝のバランスが崩れ、酸化ストレスが増加する可能性があります。HFE（Homeostatic Iron Regulator）は、鉄の取り込みと貯蔵の調整に関与するタンパク質をコードしています。このタンパク質は、トランスフェリン受容体と相互作用し、細胞への鉄の取り込みを調節することで、体内の鉄のバランスを維持します。",
  },
  {
    geneName: "KEAP1",
    datas: ["rs11085735"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。KEAP1（Kelch-like ECH-associated Protein 1）は、細胞内の抗酸化防御システムを調節するタンパク質をコードしています。KEAP1は、酸化ストレス応答に関与する転写因子Nrf2と結合し、通常時にはNrf2の活性化を抑制しています。酸化ストレスが生じるとKEAP1はNrf2を放出し、Nrf2が抗酸化酵素の発現を促進して細胞を保護します。",
  },
  {
    geneName: "NOX4",
    datas: ["rs11018628"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。NOX4（NADPH Oxidase 4）は、NOXファミリーの一員であり、活性酸素種の一種である過酸化水素（H₂O₂）を生成します。NOX4は、腎臓、血管、心臓など多くの組織で発現しており、細胞の酸化還元バランスの維持、線維化反応、細胞の分化・増殖に重要です。",
  },
];

const Gene66 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+102}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene66;
