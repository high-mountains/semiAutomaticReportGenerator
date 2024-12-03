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
    geneName: "PPARδ",
    datas: ["rs2267668", "rs1053049", "rs2016520"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞のエネルギー代謝や脂肪酸の酸化が影響を受ける可能性があります。PPARδは、脂質とエネルギー代謝を調整する核内受容体で、細胞のエネルギー利用を促進する役割を持っています。この受容体は、脂肪酸の酸化を活性化し、持久力の向上や筋肉でのエネルギー代謝を支えるために重要です。",
  },
];

const Gene101 = () => {
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
        textContent={"細胞代謝"}
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

      <GenePageNumber>131</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene101;
