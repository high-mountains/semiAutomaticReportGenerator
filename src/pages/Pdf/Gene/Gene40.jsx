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
    geneName: "PON1",
    datas: [
      "rs854560", "rs854571", "rs662", "rs854555", "rs854552"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内での有害な酸化脂質の分解や農薬の解毒能力が低下する可能性があります。PON1（Paraoxonase 1）は、パラオキソナーゼ1という酵素をコードしており、血中のリポタンパク質（特にHDL）に結合し、脂質の酸化を防ぐ役割を担います。PON1は、特定の有機リン系農薬や環境毒素を解毒する役割も持ち、動脈硬化のリスクを低減します。",
  },
];

const Gene40 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text sidebar={1} textContent={"PON1"} containerStyle={{ marginBottom: "10rem" }} />

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

      <GenePageNumber>{deltaPageCount+78}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene40;
