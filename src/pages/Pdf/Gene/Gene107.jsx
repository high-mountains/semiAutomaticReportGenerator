import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
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

      <GenePageNumber>{deltaPageCount+137}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene107;
