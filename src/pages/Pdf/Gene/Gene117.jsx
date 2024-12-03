import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "CLOCK",
    datas: ["rs1801260"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、概日リズムが乱れやすくなる可能性があります。CLOCKは、サーカディアンリズム（体内時計）を調整する転写因子をコードしており、昼夜サイクルに基づいた生理的リズムの維持に重要です。このタンパク質は、BMAL1とともに24時間周期の遺伝子発現を制御し、睡眠覚醒サイクルや代謝、ホルモン分泌、体温調節などに影響を与えます。",
  },
];

const Gene117 = () => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text
        sidebar={1}
        textContent={"夜更かし"}
        containerStyle={{ marginBottom: "10rem" }}
      />

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

      <GenePageNumber>150</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene117;
