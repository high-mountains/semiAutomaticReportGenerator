import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "KEAP1",
    datas: ["rs9676881", "rs11085735"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。KEAP1（Kelch-like ECH-associated Protein 1）は、細胞内の抗酸化防御システムを調節するタンパク質をコードしています。KEAP1は、酸化ストレス応答に関与する転写因子Nrf2と結合し、通常時にはNrf2の活性化を抑制しています。酸化ストレスが生じるとKEAP1はNrf2を放出し、Nrf2が抗酸化酵素の発現を促進して細胞を保護します。",
  },
  {
    geneName: "NOX1",
    datas: ["rs4827881", "rs5921682"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。NOX1（NADPH Oxidase 1）は、NADPHオキシダーゼファミリーの一員であり、活性酸素種（ROS）であるスーパーオキシドラジカルを生成します。NOX1は、主に免疫細胞や血管平滑筋細胞で発現し、細胞シグナル伝達や免疫応答、血管の健康維持に寄与しています。",
  },
  {
    geneName: "NOX4",
    datas: ["rs11018628"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。NOX4（NADPH Oxidase 4）は、NOXファミリーの一員であり、活性酸素種の一種である過酸化水素（H₂O₂）を生成します。NOX4は、腎臓、血管、心臓など多くの組織で発現しており、細胞の酸化還元バランスの維持、線維化反応、細胞の分化・増殖に重要です。",
  },
  {
    geneName: "SHMT1",
    datas: ["rs17806333"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SHMT1（Serine Hydroxymethyltransferase 1）は、細胞質で働くセリンヒドロキシメチルトランスフェラーゼ酵素をコードしており、セリンをグリシンに変換しながら5,10-メチレンテトラヒドロ葉酸を生成する役割を果たします。この反応は、DNA合成や修復、メチル化サイクルで必要とされる一炭素ユニットの供給に重要です。",
  },
  
];

const Gene67 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+106}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene67;
