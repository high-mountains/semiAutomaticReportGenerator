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
    geneName: "APOE",
    datas: ["rs429358", "rs7412"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内の脂質代謝やコレステロール輸送に影響を与える可能性があります。APOE（Apolipoprotein E）は、脂質の運搬と代謝に関わるアポリポタンパク質Eをコードしており、コレステロールやトリグリセリドなどの脂質を細胞間で輸送する役割を果たします。APOEは特に肝臓と脳で重要な役割を持ち、神経細胞の維持や修復にも関与しています。",
  },
];

const Gene71 = () => {
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
        textContent={"APOE"}
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

      <GenePageNumber>107</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene71;
