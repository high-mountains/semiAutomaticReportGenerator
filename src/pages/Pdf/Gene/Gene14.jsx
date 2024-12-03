import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "CYP21A2",
    datas: ["rs1330554738", "rs72552757", "rs12530380", "rs7755898"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ステロイドホルモンの代謝に影響が生じ、ヒスタミン反応の調整が乱れる可能性があります。CYP21A2（Cytochrome P450 Family 21 Subfamily A Member 2）は、ステロイド21-水酸化酵素をコードしており、コルチゾールやアルドステロンなどのステロイドホルモンの合成に関与します。この酵素は、副腎で重要な役割を果たし、ストレス応答や電解質バランスの維持に必要なホルモンの生合成に寄与しています。",
  },
];

const Gene14 = () => {
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

      <GenePageNumber>53</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene14;
